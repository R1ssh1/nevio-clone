// scripts/migrate-products.mjs
// Migrates Champak Steel reference HTML files into structured JSON.
// One product object is created per `.prodduct-list li a` entry.
// Tables present on the page are attached to ALL products in that category
// (they are dimensional/weight reference tables shared across the grade family).

import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const productsDir = path.join(projectRoot, 'src', 'data', 'products');

fs.mkdirSync(productsDir, { recursive: true });

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const cleanText = (text = '') =>
  text
    .replace(/\r/g, '')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\u00a0/g, ' ')
    .trim();

const slugify = (text = '') =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');

// Derive slug from the href attribute (strip .html extension, keep basename)
const hrefToSlug = (href = '') => {
  const base = path.basename(href, '.html');
  return slugify(base);
};

// ---------------------------------------------------------------------------
// File → output JSON name mapping
// (must match the imports in src/data/productData.ts)
// ---------------------------------------------------------------------------
const FILE_MAP = {
  'champak-buttweld-fittings-manufacturer-exporter.html':              'buttweld.json',
  'champak-fasteners-manufacturer-exporter.html':                      'fasteners.json',
  'champak-flanges-manufacturer-exporter.html':                        'flanges.json',
  'champak-forged-fittings-manufacturer-exporter.html':                'forged.json',
  'champak-reactangular-square-hollow-section-manufacturer-exporter.html': 'reactangular.json',
  'champak-round-bars-rods-manufacturer-exporter.html':                'round.json',
  'champak-seamless-welded-pipes-tubes-manufacturer-exporter.html':    'seamless.json',
  'champak-sheets-plates-manufacturer-exporter.html':                  'sheets.json',
  'champak-15mo3.html':                                                'uncategorized.json',
};

// Category slug used in the productData.ts mapping key
const FILE_CATEGORY = {
  'champak-buttweld-fittings-manufacturer-exporter.html':              'buttweld-fittings',
  'champak-fasteners-manufacturer-exporter.html':                      'fasteners',
  'champak-flanges-manufacturer-exporter.html':                        'flanges',
  'champak-forged-fittings-manufacturer-exporter.html':                'forged-fittings',
  'champak-reactangular-square-hollow-section-manufacturer-exporter.html': 'hollow-sections',
  'champak-round-bars-rods-manufacturer-exporter.html':                'round-bars',
  'champak-seamless-welded-pipes-tubes-manufacturer-exporter.html':    'pipes-tubes',
  'champak-sheets-plates-manufacturer-exporter.html':                  'sheets-coils',
  'champak-15mo3.html':                                                'specialized',
};

// ---------------------------------------------------------------------------
// Process each mapped HTML file
// ---------------------------------------------------------------------------
Object.entries(FILE_MAP).forEach(([htmlFile, outFile]) => {
  const filePath = path.join(projectRoot, htmlFile);
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  Not found, skipping: ${htmlFile}`);
    return;
  }

  const html = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);

  const categorySlug = FILE_CATEGORY[htmlFile];

  // ── Page-level overview (first 3 <p> blocks inside .padBot1 / content area)
  const overviewParts = [];
  $('.container.padBot1 p, .container p').each((i, el) => {
    if (i >= 3) return false;
    const t = cleanText($(el).text());
    if (t) overviewParts.push(t);
  });
  const pageOverview = overviewParts.join(' ');

  // ── Extract dimension/weight tables (shared across the category page)
  const tables = [];
  $('table').each((i, table) => {
    const rows = [];
    $(table).find('tr').each((_, tr) => {
      const cells = [];
      $(tr).find('th, td').each((_, cell) => {
        cells.push(cleanText($(cell).text()));
      });
      if (cells.length) rows.push(cells);
    });
    if (rows.length) {
      const title = cleanText($(table).attr('data-title') || $(table).find('caption').text()) || `Table ${i + 1}`;
      tables.push({ title, rows });
    }
  });

  // ── Collect products from .prodduct-list entries
  const products = [];
  const seenSlugs = new Set();

  // Walk each card (h3 + list) inside .wd-post__content
  $('.wd-post__content').each((_, card) => {
    const materialGroup = cleanText($(card).find('h3.wd-post__title').first().text());

    $(card).find('.prodduct-list li a').each((_, anchor) => {
      const href  = $(anchor).attr('href') || '';
      const title = cleanText($(anchor).text());

      // Skip nav/footer links that happen to match (they point to category pages)
      if (!title || href.startsWith('http') || !href.endsWith('.html')) return;

      const slug = hrefToSlug(href);
      if (!slug || seenSlugs.has(slug)) return;
      seenSlugs.add(slug);

      products.push({
        id:       slug,
        slug,
        title,
        category:      categorySlug,
        materialGroup,
        overview:      pageOverview,
        images:        [],
        specifications: {},
        standards:     [],
        grades:        [],
        dimensions:    {},
        chemicalComposition:  {},
        mechanicalProperties: {},
        physicalProperties:   {},
        applications:  [],
        availableForms: [],
        equivalentGrades: [],
        relatedProducts: [],
        tables,          // shared page tables (dimensions etc.)
      });
    });
  });

  // Fallback: if no .wd-post__content found (e.g. champak-15mo3.html),
  // create a single product from the page h1
  if (products.length === 0) {
    const title = cleanText($('h1').first().text()) || path.basename(htmlFile, '.html');
    const slug  = slugify(title);
    products.push({
      id:       slug,
      slug,
      title,
      category:      categorySlug,
      materialGroup: '',
      overview:      pageOverview,
      images:        [],
      specifications: {},
      standards:     [],
      grades:        [],
      dimensions:    {},
      chemicalComposition:  {},
      mechanicalProperties: {},
      physicalProperties:   {},
      applications:  [],
      availableForms: [],
      equivalentGrades: [],
      relatedProducts: [],
      tables,
    });
  }

  const outPath = path.join(productsDir, outFile);
  fs.writeFileSync(outPath, JSON.stringify(products, null, 2), 'utf-8');
  console.log(`✅  ${outFile}  →  ${products.length} products`);
});

console.log('\n🔄  Migration complete.');

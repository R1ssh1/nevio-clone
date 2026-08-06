# Vedantara Product Pages — AI Agent Fix Instructions

> **Context:** This is a React/Vite project for Vedantara Metal & Alloys Pvt Ltd (a Mumbai industrial metals supplier). The data layer (`productDetails.ts`) is being updated separately in ~30 min with encoding fixes. These instructions focus on the layout, rendering, and CSS gaps that make product pages look broken or incomplete right now.

---

## Project Map (Relevant Files Only)

```
src/
├── App.css                         ← ALL styles; add new classes here
├── App.tsx                         ← Route definitions
├── data/
│   ├── products.ts                 ← ProductInfo[] — category-level copy (description1–4, SEO)
│   └── productDetails.ts           ← DynamicCategory[] + DynamicProduct[] — product-level data
├── pages/
│   ├── ProductDetailPage.tsx       ← Individual product pages (THE MAIN BROKEN PAGE)
│   ├── ButtweldFittingsPage.tsx    ← Category listing page (use as reference pattern)
│   ├── PipesTubesPage.tsx          ← Same pattern
│   ├── [All other category pages]  ← Same pattern
│   └── ProductsPage.tsx            ← Top-level /products page
└── components/
    └── PageHero.tsx                ← Hero banner (eyebrow, h1, description, breadcrumbs)
```

---

## Theme Tokens (from `.site-shell` in App.css)

| Token | Value |
|---|---|
| `--navy` | `rgba(0, 51, 142)` |
| `--orange` | `#f05a28` |
| `--ink` | `#111820` |
| `--muted` | `#66717d` |
| `--silver` | `rgba(159, 159, 159)` |
| Brand primary (teal, links) | `#03889b` |
| Body bg | `#f5f6f7` |

---

## Data Shapes You Must Understand

### `DynamicProduct` (from `productDetails.ts`)

```typescript
interface DynamicProduct {
  categorySlug: string;         // e.g. "buttweld-fittings"
  subCategoryName: string;      // e.g. "Alloy 20 Buttweld Fittings"
  productName: string;          // e.g. "Alloy 20 Buttweld Fittings"
  slug: string;                 // e.g. "alloy-20-buttweld-fittings"
  description: string[];        // 10–23 items — see anatomy below
  tables: ProductTable[];       // 2–5 tables per product
  image?: string;               // "/assets/products/{slug}.png"
  images?: string[];            // [image, image-1.jpg … image-12.png]
}

interface ProductTable {
  title?: string;               // e.g. "Chemical Composition of …"
  rows: string[][];             // rows[0] = header row, rows[1..] = data
}
```

### `description[]` Anatomy (Critical — Drives All Rendering Decisions)

Every product's `description` array contains a mix of content types that **must be rendered differently**:

| Type | How to Detect | How to Render |
|---|---|---|
| **Intro paragraph** (0–4 items) | Long prose, no pattern | `<p>` tag, normal body text |
| **Product variant list** | Comma-separated product names, 100–200 chars, 3–9 commas | `<ul class="product-spec-list">` — split on `, ` into `<li>` items |
| **Spec block** | Contains `Specifications :` or `Standard :` or `Dimensions :` or multiple ` : ` separators | `<div class="spec-inline-block">` with formatted key: value pairs |
| **Application note** | Starts with "Our … are used in" or "Application Industries" or similar | `<p>` with a preceding `<h4>` label |
| **Keyword dump (last 2)** | Very long (>600 chars), >20 commas, or consists entirely of lowercase SEO terms | **Omit entirely** — do not render |
| **Boilerplate closer** | Starts with "Vedantara Metal & Alloys Pvt Ltd is one of the leading manufacturer, supplier and stockiest" | **Omit entirely** |

**Practical rule:** Skip the last 2 items in every description array (they are always SEO keyword dumps). Skip any item that is >800 chars with >20 commas. Render everything else.

---

## Fix 1: `ProductDetailPage.tsx` — Full Rewrite

**Problem:** The current page has a working skeleton but renders description incorrectly (all items as `<p>` or splits on commas naively), the image gallery is unused, and the layout lacks visual hierarchy that Nevio's original had.

### Target Layout

Reference: https://www.champaksteel.com/stainless-steel-304-304l-304h-seamless-welded-pipes-tubes-manufacturer-exporter.html
The TOC appears immediately after the opening prose, before the product variant lists and spec content — not at the bottom of the page. This is the exact pattern to replicate.

```
[PageHero — existing, keep as-is]

[Section: max-width 1170px, margin 4rem auto]
  [Grid: 2fr 1fr gap-4rem at ≥992px]
  
  LEFT COLUMN (.product-detail-main):
    [Image Gallery — primary image large, thumbnails below]
    [h2: "{productName} Manufacturer, Supplier & Exporter"]
    [Intro paragraphs — first 3–4 prose items]
    [Table of Contents ← HERE, immediately after intro prose, before variants/specs]
    [Product Variants section — h3 + grid of variant chips/list items]
    [Spec block — if Specifications/Dimensions detected]
    [Application industries note — if present]
    [Technical Tables — each with anchor id]
  
  RIGHT COLUMN (.product-detail-sidebar):
    [Sibling products widget]
    [Request a Quote widget]
    [Need Assistance widget]
```

### Image Gallery Component

```tsx
// Add inside ProductDetailPage.tsx (no separate file needed)
function ProductImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  if (!images || images.length === 0) return null;

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <img
          src={images[active]}
          alt={alt}
          className="product-gallery__hero"
          loading="eager"
        />
      </div>
      {images.length > 1 && (
        <div className="product-gallery__thumbs">
          {images.slice(0, 8).map((src, i) => (
            <button
              key={i}
              className={`product-gallery__thumb${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
            >
              <img src={src} alt={`${alt} view ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

### Description Renderer Function

**TOC placement rule (matches Champak Steel pattern):** The TOC is injected into the content stream immediately after the last consecutive intro prose paragraph — i.e. after the opening `prose` blocks end and before the first `variantList` / `specBlock`. This means the reader sees: intro text → TOC → "Available Types" → spec block → application note → tables. The TOC anchors link down to the technical tables.

```tsx
// Add inside ProductDetailPage.tsx above the component
type DescBlock =
  | { kind: 'prose'; text: string }
  | { kind: 'variantList'; items: string[] }
  | { kind: 'specBlock'; text: string }
  | { kind: 'applicationNote'; text: string }
  | { kind: 'toc'; tables: ProductTable[] };   // ← injected synthetic block

function classifyDescItem(text: string): Omit<DescBlock, 'kind' extends 'toc' ? 'kind' : never> | null {
  // Skip SEO dumps and boilerplate closers
  const commas = (text.match(/,/g) || []).length;
  if (commas > 20 && text.length > 600) return null;
  if (text.startsWith('Vedantara Metal & Alloys Pvt Ltd is one of the leading manufacturer, supplier and stockiest')) return null;

  // Spec block: contains " : " multiple times (Specifications, Dimensions, etc.)
  const colonPairs = (text.match(/ : /g) || []).length;
  if (colonPairs >= 2 || /Specifications\s*:/i.test(text) || /Standard\s*:/i.test(text)) {
    return { kind: 'specBlock', text };
  }

  // Application note
  if (/are used in a wide range|Application Industries|used in the following/i.test(text)) {
    return { kind: 'applicationNote', text };
  }

  // Variant list: 3+ commas and text is all product/grade names (short items)
  if (commas >= 3 && text.length < 500) {
    const items = text.split(/,\s*/);
    if (items.every(item => item.length < 120)) {
      return { kind: 'variantList', items };
    }
  }

  return { kind: 'prose', text };
}

// Simplify the type — toc is injected after classification, not from classifyDescItem
type ContentBlock =
  | { kind: 'prose'; text: string }
  | { kind: 'variantList'; items: string[] }
  | { kind: 'specBlock'; text: string }
  | { kind: 'applicationNote'; text: string }
  | { kind: 'toc'; tables: ProductTable[] };

function buildContentBlocks(description: string[], tables: ProductTable[]): ContentBlock[] {
  // Always skip last 2 (SEO keyword dump + boilerplate)
  const items = description.slice(0, -2);

  let variantAccumulator: string[][] = [];
  const classified: ContentBlock[] = [];

  for (const item of items) {
    const block = classifyDescItem(item.trim()) as ContentBlock | null;
    if (block === null) continue;

    if (block.kind === 'variantList') {
      variantAccumulator.push(block.items);
    } else {
      if (variantAccumulator.length > 0) {
        classified.push({ kind: 'variantList', items: variantAccumulator.flat() });
        variantAccumulator = [];
      }
      classified.push(block);
    }
  }
  if (variantAccumulator.length > 0) {
    classified.push({ kind: 'variantList', items: variantAccumulator.flat() });
  }

  // Inject TOC after the last leading prose block, before the first non-prose block.
  // Only inject if there are tables with titles to link to.
  const hasTitledTables = tables.some(t => t.title);
  if (!hasTitledTables) return classified;

  const firstNonProseIdx = classified.findIndex(b => b.kind !== 'prose');
  const tocBlock: ContentBlock = { kind: 'toc', tables };

  if (firstNonProseIdx === -1) {
    // All blocks are prose — append TOC at the end before tables
    return [...classified, tocBlock];
  } else {
    // Insert TOC right before the first non-prose block
    return [
      ...classified.slice(0, firstNonProseIdx),
      tocBlock,
      ...classified.slice(firstNonProseIdx),
    ];
  }
}

function renderContentBlocks(blocks: ContentBlock[]) {
  return blocks.map((block, i) => {
    if (block.kind === 'prose') {
      return (
        <p key={i} className="product-detail-content__para">
          {block.text}
        </p>
      );
    }

    if (block.kind === 'toc') {
      const titledTables = block.tables.filter(t => t.title);
      if (titledTables.length === 0) return null;
      return (
        <div key={i} className="tve_contents_table">
          <span className="tble-cont">Table Of Content</span>
          <div className="tble-contents-table">
            <div className="ct_column">
              {block.tables.map((table, ti) =>
                table.title ? (
                  <div key={`toc-${ti}`}>
                    <a href={`#table-${ti}`}>{table.title}</a>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      );
    }

    if (block.kind === 'variantList') {
      return (
        <div key={i} className="product-variants-block">
          <h3 className="product-variants-block__title">Available Types</h3>
          <ul className="product-spec-list">
            {block.items.map((item, j) => (
              <li key={j}>{item.trim()}</li>
            ))}
          </ul>
        </div>
      );
    }

    if (block.kind === 'specBlock') {
      return (
        <div key={i} className="product-spec-inline">
          <h3 className="product-spec-inline__title">Specifications &amp; Standards</h3>
          <p className="product-spec-inline__text">{block.text}</p>
        </div>
      );
    }

    if (block.kind === 'applicationNote') {
      return (
        <div key={i} className="product-application-note">
          <h3 className="product-application-note__title">Applications</h3>
          <p>{block.text}</p>
        </div>
      );
    }

    return null;
  });
}
```

### Full Updated `ProductDetailPage.tsx`

```tsx
import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Seo } from '../components/Seo';
import type { DynamicProduct } from '../data/productDetails';
import { dynamicCategories } from '../data/productDetails';

async function loadProduct(categorySlug: string, slug: string): Promise<DynamicProduct | undefined> {
  const { dynamicProducts } = await import('../data/productDetails');
  return dynamicProducts.find((p) => p.categorySlug === categorySlug && p.slug === slug);
}

// [Insert ProductImageGallery function here]
// [Insert classifyDescItem, renderDescBlocks functions here]

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const pathParts = location.pathname.split('/');
  const categorySlug = pathParts.length > 2 ? pathParts[2] : '';
  const slugFromPath = pathParts.length > 3 ? pathParts[3] : (id ?? '');

  const [product, setProduct] = useState<DynamicProduct | null | undefined>(undefined);

  useEffect(() => {
    setProduct(undefined);
    loadProduct(categorySlug, slugFromPath).then((p) => setProduct(p ?? null));
  }, [categorySlug, slugFromPath]);

  if (product === undefined) {
    return (
      <div className="container" style={{ marginTop: '6rem', textAlign: 'center' }}>
        <p>Loading…</p>
      </div>
    );
  }

  if (product === null) {
    return (
      <div className="container" style={{ marginTop: '4rem' }}>
        <h2>Product not found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  const heroImage = product.image ?? product.images?.[0] ?? '/assets/home/product-6.webp';
  const allImages = product.images?.length ? product.images : [heroImage];

  const catObj = dynamicCategories.find(c => c.slug === categorySlug);
  const siblingLinks = catObj?.subcategories
    ?.flatMap(s => s.productLinks)
    .filter(pl => pl.slug !== slugFromPath) ?? [];

  const heroDesc = (product.description?.[0] ?? '').split(/\.\s+/).slice(0, 2).join('. ') + '.';

  return (
    <div className="page-stack">
      <Seo
        title={`${product.productName} | Vedantara Metal & Alloys Pvt Ltd`}
        description={`Premium ${product.productName} manufactured and supplied globally by Vedantara Metal & Alloys Pvt Ltd.`}
        path={location.pathname}
      />
      <PageHero
        eyebrow={product.subCategoryName}
        title={product.productName}
        description={heroDesc}
        breadcrumbs={
          <>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <Link to={`/products/${product.categorySlug}`}>
              {product.categorySlug.replace(/-/g, ' ')}
            </Link>
            <span>/</span>
            <span>{product.productName}</span>
          </>
        }
      />

      <section className="container" style={{ marginTop: '4rem', marginBottom: '4rem', maxWidth: '1170px' }}>
        <div className="product-detail-layout">

          {/* ── LEFT: main content ── */}
          <div className="product-detail-main">

            <ProductImageGallery images={allImages} alt={product.productName} />

            <div className="product-detail-content">
              <h2>{product.productName} Manufacturer, Supplier &amp; Exporter</h2>

              {/* Content blocks: intro prose → TOC (injected) → variants → spec → application */}
              {renderContentBlocks(buildContentBlocks(product.description, product.tables))}

              {/* Technical Tables */}
              {product.tables.length > 0 && (
                <div className="product-tables" style={{ marginTop: '2.5rem' }}>
                  {product.tables.map((table, ti) => (
                    <div key={ti} id={`table-${ti}`} style={{ marginBottom: '2.5rem', scrollMarginTop: '100px' }}>
                      {table.title && (
                        <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--navy)' }}>
                          {table.title}
                        </h3>
                      )}
                      <div style={{ overflowX: 'auto' }}>
                        <table className="spec-table spec-table--light">
                          {table.rows[0] && (
                            <thead>
                              <tr>
                                {table.rows[0].map((cell, ci) => <th key={ci}>{cell}</th>)}
                              </tr>
                            </thead>
                          )}
                          <tbody>
                            {table.rows.slice(1).map((row, ri) => (
                              <tr key={ri}>
                                {row.map((cell, ci) => <td key={ci}>{cell}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT: sidebar ── */}
          <aside className="product-detail-sidebar">
            <div className="sidebar-widget" style={{ order: -1 }}>
              <h3 className="sidebar-widget-title">Other Products</h3>
              <ul className="sidebar-nav">
                {siblingLinks.slice(0, 12).map(pl => (
                  <li key={pl.slug}>
                    <Link to={`/products/${categorySlug}/${pl.slug}`}>{pl.name}</Link>
                  </li>
                ))}
              </ul>
              {siblingLinks.length > 12 && (
                <Link to={`/products/${categorySlug}`} style={{ fontSize: '0.85rem', color: 'var(--navy)', marginTop: '0.8rem', display: 'block' }}>
                  View all →
                </Link>
              )}
            </div>
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Request a Quote</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1.2rem' }}>
                Get immediate pricing and stock availability for {product.productName}.
              </p>
              <Link to="/contact-us" className="primary-button" style={{ width: '100%' }}>
                Contact Sales
              </Link>
            </div>
            <div className="sidebar-widget bg-navy">
              <h3 className="sidebar-widget-title text-white">Need Assistance?</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.2rem' }}>
                Our technical experts are ready to help you find the right material.
              </p>
              <a href="tel:+919876543210" className="contact-link-light">📞 +91 98765 43210</a>
              <a href="mailto:sales@vedantarametals.com" className="contact-link-light">✉️ sales@vedantarametals.com</a>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}
```

---

## Fix 2: Add Missing CSS to `App.css`

Append these classes at the end of `App.css`. Several are referenced in existing pages but have no definition yet (especially `prod-desc-band`).

```css
/* ===========================
   PRODUCT GALLERY
=========================== */
.product-gallery {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.product-gallery__main {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: #f0f2f5;
  border: 1px solid #e4e8ed;
}

.product-gallery__hero {
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  display: block;
}

.product-gallery__thumbs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.product-gallery__thumb {
  width: 72px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;
  border: 2px solid transparent;
  background: #f0f2f5;
  padding: 0;
  cursor: pointer;
  transition: border-color 0.15s;
}

.product-gallery__thumb:hover {
  border-color: var(--muted);
}

.product-gallery__thumb.active {
  border-color: var(--navy);
}

.product-gallery__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ===========================
   DESCRIPTION BLOCK TYPES
=========================== */
.product-detail-content__para {
  color: #162334;
  line-height: 1.75;
  margin-bottom: 1.2rem;
  font-size: 1.05rem;
}

.product-variants-block {
  margin: 1.5rem 0 2rem;
}

.product-variants-block__title {
  font-size: 1.15rem;
  color: var(--navy);
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.product-spec-inline {
  background: #f8f9fb;
  border-left: 3px solid var(--navy);
  border-radius: 0 8px 8px 0;
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
}

.product-spec-inline__title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 0.5rem;
}

.product-spec-inline__text {
  font-size: 0.95rem;
  color: #2d3748;
  line-height: 1.7;
}

.product-application-note {
  background: rgba(0, 51, 142, 0.04);
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
}

.product-application-note__title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 0.5rem;
}

/* ===========================
   PROD-DESC-BAND  (used in all category pages — currently missing from CSS)
=========================== */
.prod-desc-band {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: linear-gradient(135deg, var(--navy) 0%, #0a1f4a 100%);
  border-radius: 14px;
  padding: 3rem;
  color: #fff;
}

@media (max-width: 768px) {
  .prod-desc-band {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }
}

.prod-desc-band__text h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--orange);
  display: inline-block;
}

.prod-desc-band__text p {
  font-size: 0.97rem;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.75;
}
```

---

## Fix 3: Category Pages — `ButtweldFittingsPage.tsx` Pattern Audit

All 9 category pages (`ButtweldFittingsPage`, `PipesTubesPage`, `RoundBarsPage`, `SheetsCoilsPage`, `WiresPage`, `FlangesPage`, `ForgedFittingsPage`, `FastenersPage`, `HollowSectionsPage`) follow the same pattern:

```
PageHero → intro paragraphs → cat-subcat-row list → prod-desc-band
```

**Issue:** Every category page uses hardcoded fallback images for subcategory rows because it doesn't know the product image paths yet. Once `productDetails.ts` is updated, replace the fallback image logic in each category page with:

```tsx
// Replace the fallbackImages array approach with this:
const firstProduct = cat.subcategories
  .find(s => s.name === sub.name)
  ?.productLinks[0];
const imgSrc = firstProduct
  ? `/assets/products/${firstProduct.slug}.png`
  : fallbackImages[index % fallbackImages.length];
```

**Do not** rewrite the category pages structurally — they are correct. Only fix the image resolution once product images are confirmed available.

---

## Fix 4: Encoding Artefacts in Table Cells

`productDetails.ts` currently contains encoding errors like `â€"` (should be `–`) and `Â°` (should be `°`). These appear in table cells rendered via `ProductDetailPage`. Once the file is replaced with the encoding-fixed version, these will resolve automatically. **Do not** add a JavaScript string sanitiser — it would mask future encoding issues.

If you need a temporary band-aid before the file is replaced:

```tsx
// Temp helper — delete once productDetails.ts is re-delivered
function fixEncoding(s: string): string {
  return s
    .replace(/â€"/g, '–')
    .replace(/â€™/g, "'")
    .replace(/Â°/g, '°')
    .replace(/Â®/g, '®')
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"');
}
// Apply when rendering: fixEncoding(cell)
```

---

## Fix 5: Route for `/products/:category` (Dynamic Catch)

Currently `App.tsx` has 9 separate routes (`/products/pipes-tubes/:id`, etc.) but **no catch-all for unknown category slugs**. If a link ever uses a categorySlug not explicitly routed, it 404s silently. Add after the last category route:

```tsx
{/* Catch-all: handles any /products/:category/:slug combination */}
<Route path="/products/:category/:id" element={<ProductDetailPage />} />
```

This is a **low-priority** fix — the 9 explicit routes cover all current slugs — but add it to prevent future breakage.

---

## What NOT to Change

- `PageHero.tsx` — works correctly, leave as-is
- `Header.tsx` / `Footer.tsx` / `Layout.tsx` — not involved
- `Seo.tsx` — works correctly
- `dynamicCategories` data — used correctly in sidebar sibling links
- The existing `.spec-table--light`, `.tve_contents_table`, `.sidebar-widget`, `.cat-subcat-row` CSS — all correctly defined; do not duplicate

---

## Verification Checklist

After making changes, verify these URLs render correctly:

1. `/products/buttweld-fittings/alloy-20-buttweld-fittings` — most fields populated, 18 description items, 3 tables, 13 images
2. `/products/round-bars/stainless-steel-round-bars` — large category (51 products), long sibling list
3. `/products/pipes-tubes` — category listing, check `prod-desc-band` renders with white text on navy
4. `/products/fasteners` — category listing (fewest subcategories, good minimal test)

---

## Scale Reference

| Category | Products | Description items avg |
|---|---|---|
| round-bars | 51 | ~16 |
| sheets-coils | 47 | ~17 |
| pipes-tubes | 43 | ~16 |
| hollow-sections | 37 | ~15 |
| flanges | 31 | ~18 |
| forged-fittings | 23 | ~17 |
| buttweld-fittings | 20 | ~18 |
| fasteners | 14 | ~16 |
| **Total** | **266** | — |

All 266 products share the same `ProductDetailPage` component — test with a product from each category before shipping.

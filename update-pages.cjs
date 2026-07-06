const fs = require('fs');
const path = require('path');

const files = [
  { file: 'SheetsCoilsPage.tsx', slug: '/products/sheets-coils' },
  { file: 'RoundBarsPage.tsx', slug: '/products/round-bars' },
  { file: 'FlangesPage.tsx', slug: '/products/flanges' },
  { file: 'ForgedFittingsPage.tsx', slug: '/products/forged-fittings' },
  { file: 'ButtweldFittingsPage.tsx', slug: '/products/buttweld-fittings' },
  { file: 'FastenersPage.tsx', slug: '/products/fasteners' },
  { file: 'HollowSectionsPage.tsx', slug: '/products/hollow-sections' },
  { file: 'WiresPage.tsx', slug: '/products/wires' }
];

files.forEach(({file, slug}) => {
  const filePath = path.join('src', 'pages', file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('import { products }')) {
    content = content.replace("import { pageMeta } from './pageMeta'", "import { pageMeta } from './pageMeta'\nimport { products } from '../data/products'");
  }
  
  // Replace the first <p>...</p> inside feature-split__content
  const pRegex = /<div className="feature-split__content"[^>]*>\s*<h2[^>]*>.*?<\/h2>\s*<p>([\s\S]*?)<\/p>/;
  
  content = content.replace(pRegex, (match, p1) => {
    return match.replace(`<p>${p1}</p>`, `<p>{products.find(p => p.slug === '${slug}')?.description1}</p>`);
  });
  
  fs.writeFileSync(filePath, content);
  console.log('Updated', file);
});

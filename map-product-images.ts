import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productImagesDir = path.join(__dirname, 'public/assets/product_images');
const images = fs.existsSync(productImagesDir) ? fs.readdirSync(productImagesDir) : [];
const validImages = images.filter(f => f !== '.DS_Store');

// Helper to check if string contains all keywords
function matches(title: string, keywords: string[]) {
  const t = title.toLowerCase();
  return keywords.every(k => t.includes(k));
}

function matchImage(title: string): string | null {
  const t = title.toLowerCase();
  for (const img of validImages) {
    const i = img.toLowerCase();
    // basic heuristics based on the image names we saw
    if (matches(t, ['alloy', '20', 'round']) && i.includes('alloy-20-round-bar')) return `/assets/product_images/${img}`;
    if (matches(t, ['alloy', '20', 'sheet']) && i.includes('alloy-20-sheet')) return `/assets/product_images/${img}`;
    if (matches(t, ['brass', 'round']) && i.includes('brass-round-bar')) return `/assets/product_images/${img}`;
    if (matches(t, ['copper', 'nickel', 'sheet']) && i.includes('cuni') && i.includes('sheet')) return `/assets/product_images/${img}`;
    if (matches(t, ['copper', 'nickel']) && i.includes('copper-nickel-alloy')) return `/assets/product_images/${img}`;
    if (matches(t, ['hastelloy']) && i.includes('hastelloy')) return `/assets/product_images/${img}`;
    if (matches(t, ['mild', 'steel', 'round']) && i.includes('mild-steel-bars')) return `/assets/product_images/${img}`;
    if (matches(t, ['carbon', 'steel', 'sheet']) && i.includes('carbon-steel-sheet')) return `/assets/product_images/${img}`;
    if (matches(t, ['monel', 'pipes']) && i.includes('monel')) return `/assets/product_images/${img}`;
    if (matches(t, ['smo', '254', 'pipes']) && i.includes('smo-254-pipes')) return `/assets/product_images/${img}`;
    if (matches(t, ['smo', '254', 'sheet']) && i.includes('steel-254-sheets')) return `/assets/product_images/${img}`;
    if (matches(t, ['stainless', '303', 'round']) && i.includes('303-grade-round-bar')) return `/assets/product_images/${img}`;
    if (matches(t, ['stainless', '304h', 'round']) && i.includes('304h-round-bars')) return `/assets/product_images/${img}`;
    if (matches(t, ['stainless', '310', 'sheet']) && i.includes('310s-sheet')) return `/assets/product_images/${img}`;
    if (matches(t, ['stainless', '317', 'sheet']) && i.includes('317l-sheets')) return `/assets/product_images/${img}`;
    if (matches(t, ['titanium', 'round']) && i.includes('titanium-rods')) return `/assets/product_images/${img}`;
    if (matches(t, ['stainless', 'round']) && i.includes('stainless-round-bar')) return `/assets/product_images/${img}`;
    if (matches(t, ['aluminium', 'plate']) && i.includes('aluminium-plate')) return `/assets/product_images/${img}`;
    if (matches(t, ['stainless', '20', 'plate']) && i.includes('stainless-steel-20-plates')) return `/assets/product_images/${img}`;
    if (matches(t, ['253', 'tube']) && i.includes('253ma-tube')) return `/assets/product_images/${img}`;
    if (matches(t, ['253', 'pipe']) && i.includes('253ma-tube')) return `/assets/product_images/${img}`;
  }
  return null;
}

const jsonFiles = [
  'buttweld.json',
  'fasteners.json',
  'flanges.json',
  'forged.json',
  'reactangular.json', // Hollow sections
  'round.json',
  'seamless.json', // Pipes & tubes
  'sheets.json',
  'uncategorized.json' // Wires
];

let totalUpdated = 0;

for (const file of jsonFiles) {
  const filePath = path.join(__dirname, `src/data/products/${file}`);
  if (!fs.existsSync(filePath)) continue;
  
  const products = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updated = 0;

  for (const product of products) {
    const matchedImage = matchImage(product.title);
    
    // Only apply if it doesn't already have images, or it only has generic/fake images
    // Wait, let's just prepend the matched image if it exists
    if (matchedImage) {
      if (!product.images) product.images = [];
      if (!product.images.includes(matchedImage)) {
        product.images.unshift(matchedImage); // put at front so it's used as hero
        updated++;
        totalUpdated++;
      }
    }
  }

  if (updated > 0) {
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
    console.log(`Updated ${updated} products in ${file}`);
  }
}

console.log(`Total products updated with images from product_images: ${totalUpdated}`);

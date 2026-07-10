import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dynamicProducts } from './src/data/productDetails.js';
import { productData, findProductByName } from './src/data/productData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let updated = 0;

for (const p of dynamicProducts) {
  const jsonProduct = findProductByName(p.categorySlug, p.productName);
  
  if (jsonProduct) {
    const imagesToKeep = new Set(jsonProduct.images || []);
    
    if (p.image && p.image !== '/assets/home/product-6.webp') {
      imagesToKeep.add(p.image);
    }
    
    if (p.images && p.images.length > 0) {
      for (const img of p.images) {
        if (img !== '/assets/home/product-6.webp') {
          imagesToKeep.add(img);
        }
      }
    }
    
    const newImages = Array.from(imagesToKeep);
    if (newImages.length > 0 && JSON.stringify(jsonProduct.images) !== JSON.stringify(newImages)) {
      jsonProduct.images = newImages;
      updated++;
    }
  }
}

// Now write the updated JSON objects back to their files
const categoryToFileMap: Record<string, string> = {
  'buttweld-fittings': 'buttweld.json',
  'fasteners': 'fasteners.json',
  'flanges': 'flanges.json',
  'forged-fittings': 'forged.json',
  'pipes-tubes': 'seamless.json',
  'hollow-sections': 'reactangular.json',
  'round-bars': 'round.json',
  'wires': 'uncategorized.json',
  'sheets-coils': 'sheets.json'
};

for (const [categorySlug, list] of Object.entries(productData)) {
  const filename = categoryToFileMap[categorySlug];
  if (filename) {
    const filepath = path.join(__dirname, 'src', 'data', 'products', filename);
    fs.writeFileSync(filepath, JSON.stringify(list, null, 2));
    console.log(`Saved ${filename}`);
  }
}

console.log(`Synced images for ${updated} products from productDetails.ts to JSON files.`);

import { findProductByName } from './src/data/productData.js';
import { dynamicCategories } from './src/data/productDetails.js';

let missing = 0;
for (const cat of dynamicCategories) {
  for (const sub of cat.subcategories) {
    if (sub.productLinks.length > 0) {
      const firstProduct = sub.productLinks[0];
      const found = findProductByName(cat.slug, firstProduct.name);
      if (!found) {
        console.log(`MISMATCH in ${cat.slug}: '${firstProduct.name}' not found`);
        missing++;
      }
    }
  }
}
console.log('Total missing category thumbnails:', missing);

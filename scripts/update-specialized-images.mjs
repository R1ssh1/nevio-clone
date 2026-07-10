import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const detailsPath = path.join(projectRoot, 'src', 'data', 'specializedProductDetails.ts');
let detailsContent = fs.readFileSync(detailsPath, 'utf-8');

const splitToken = 'export const specializedProductDetails: DynamicProduct[] = ';
const splitIndex = detailsContent.indexOf(splitToken);
if (splitIndex === -1) {
    console.error("Could not find specializedProductDetails array!");
    process.exit(1);
}

const beforeProducts = detailsContent.slice(0, splitIndex + splitToken.length);
let productsStr = detailsContent.slice(splitIndex + splitToken.length);

const firstBracket = productsStr.indexOf('[');
const arrayStr = productsStr.slice(firstBracket, productsStr.lastIndexOf(']') + 1);

let products;
try {
    products = JSON.parse(arrayStr);
    console.log("Successfully parsed specializedProductDetails as JSON! Count:", products.length);
} catch (e) {
    console.error("Failed to parse as JSON:", e.message);
    process.exit(1);
}

const subcategoryImages = {
  'Abrasion Resistant Plates': '/images/products/abrasion-resistant-steel.jpg',
  'Quenched & Tempered Steel': '/images/products/quenched-tempered-steel.jpg',
  'Corten Steel': '/images/products/corten-steel-sheet.webp',
  'Boiler Steel': '/images/products/boiler-plate-steel.jpg',
  'Manganese Steel': '/images/products/manganese-steel-plate.avif',
  'Armour Steel': '/images/products/armour-steel-plate.jpg',
  'DSQ Steel': '/images/products/dsq-steel-plate.webp',
  '15Mo3 & 16Mo3 Steel': '/images/products/15mo3-steel-plate.avif',
  'Tiscral Sailhard Plates': '/assets/products/tiscral-sailhard-plates-1.jpg'
};

let updatedCount = 0;
for (const p of products) {
    const img = subcategoryImages[p.subCategoryName];
    if (img) {
        p.image = img;
        updatedCount++;
    }
}

console.log(`Updated ${updatedCount} products with images!`);

// Construct new file content
const newArrayStr = JSON.stringify(products, null, 2);
const newContent = beforeProducts + newArrayStr + ';\n';
fs.writeFileSync(detailsPath, newContent, 'utf-8');
console.log("Written to specializedProductDetails.ts!");

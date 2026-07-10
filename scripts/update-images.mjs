import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const detailsPath = path.join(projectRoot, 'src', 'data', 'productDetails.ts');
let detailsContent = fs.readFileSync(detailsPath, 'utf-8');

const splitToken = 'export const dynamicProducts: DynamicProduct[] = ';
const splitIndex = detailsContent.indexOf(splitToken);
if (splitIndex === -1) {
    console.error("Could not find dynamicProducts array!");
    process.exit(1);
}

const beforeProducts = detailsContent.slice(0, splitIndex + splitToken.length);
let productsStr = detailsContent.slice(splitIndex + splitToken.length);

const firstBracket = productsStr.indexOf('[');
const arrayStr = productsStr.slice(firstBracket, productsStr.lastIndexOf(']') + 1);

let products;
try {
    products = JSON.parse(arrayStr);
    console.log("Successfully parsed dynamicProducts as JSON! Count:", products.length);
} catch (e) {
    console.error("Failed to parse as JSON:", e.message);
    process.exit(1);
}

// Load product data
const productsDir = path.join(projectRoot, 'src', 'data', 'products');
const jsonFiles = fs.readdirSync(productsDir).filter(f => f.endsWith('.json'));

const productData = {};
for (const file of jsonFiles) {
    const content = fs.readFileSync(path.join(productsDir, file), 'utf-8');
    const name = file.replace('.json', '');
    productData[name] = JSON.parse(content);
}

// Aliases
const aliasesPath = path.join(projectRoot, 'src', 'data', 'productAliases.ts');
const aliasesContent = fs.readFileSync(aliasesPath, 'utf-8');
const aliasMatch = aliasesContent.match(/export const productAliases:\s*Record<string,\s*string>\s*=\s*({[\s\S]*?});/);
let aliases = {};
if (aliasMatch) {
    aliases = new Function('return ' + aliasMatch[1])();
}

const categoryMap = {
  'buttweld-fittings': 'buttweld',
  'fasteners': 'fasteners',
  'flanges': 'flanges',
  'forged-fittings': 'forged',
  'pipes-tubes': 'seamless',
  'round-bars': 'round',
  'wires': 'uncategorized',
  'sheets-coils': 'sheets',
};

const findProductImage = (categorySlug, name) => {
    let jsonKey = categoryMap[categorySlug];
    let list = jsonKey ? productData[jsonKey] : [];
    if (categorySlug === 'hollow-sections') {
        list = [...(productData['reactangular'] || []), ...(productData['uncategorized'] || [])];
    }
    
    if (!list || list.length === 0) return undefined;

    const searchName = aliases[name] || name;
    const normalize = (s) => s.toLowerCase().replace(/stainless steel/g, 'ss').replace(/[^a-z0-9]/g, '');
    const normalizedTarget = normalize(searchName);

    const product = list.find((p) => normalize(p.title) === normalizedTarget);
    if (product && product.images && product.images.length > 0) {
        return product.images[0];
    }
    return undefined;
}

let updatedCount = 0;
for (const p of products) {
    const img = findProductImage(p.categorySlug, p.productName);
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
console.log("Written to productDetails.ts!");

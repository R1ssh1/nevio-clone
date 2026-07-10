import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, 'src/data/products/seamless.json');
const products = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

let updated = 0;

for (const product of products) {
  const title = product.title.toLowerCase();
  let folder = '';

  if (title.includes('ss ') || title.includes('stainless steel') || title.includes('253 ma')) {
    folder = 'stainless_steel';
  } else if (title.includes('titanium')) {
    folder = 'titanium';
  } else if (title.includes('carbon steel') || title.includes('a691') || title.includes('api 5l')) {
    folder = 'carbonsteel';
  } else if (title.includes('alloy steel')) {
    folder = 'alloysteel';
  } else if (title.includes('alloy 20') || title.includes('hastelloy') || title.includes('inconel') || title.includes('incoloy') || title.includes('monel') || title.includes('nickel')) {
    // If there's a specific folder for these, use it. Otherwise, let's just use generic alloy20 for now.
    // Wait, the folders are: alloy20, alloysteel, alloysteelwelded, aluminiumalloy, carbonsteel, coppernickel, stainless_steel, titanium
    if (title.includes('aluminium')) folder = 'aluminiumalloy';
    else if (title.includes('cupro-nickel') || title.includes('copper nickel')) folder = 'coppernickel';
    else folder = 'alloy20'; // fallback for other high nickel alloys
  } else if (title.includes('duplex')) {
    folder = 'stainless_steel'; // Duplex is a type of stainless steel
  }

  if (folder) {
    const folderPath = path.join(__dirname, 'public/assets/pipes&tubes', folder);
    if (fs.existsSync(folderPath)) {
      const files = fs.readdirSync(folderPath);
      const validFiles = files.filter(f => f !== '.DS_Store');
      if (validFiles.length > 0) {
        // Map all images from the folder
        product.images = validFiles.map(f => `/assets/pipes&tubes/${folder}/${f}`);
        updated++;
      }
    }
  }
}

fs.writeFileSync(jsonPath, JSON.stringify(products, null, 2));
console.log(`Mapped images for ${updated} products in seamless.json`);

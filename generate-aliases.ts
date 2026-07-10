import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mismatches = [
  'Hastelloy C22/C276 Buttweld Fittings',
  'Titanium Gr 1/2/5/9 Buttweld Fittings',
  'Duplex Steel S31803/S32205 Fasteners',
  'Nickel Alloy 200/201 Fasteners',
  'Copper Nickel Alloy 70 / 30 Flanges',
  'Duplex Steel S31803/S32205 Flanges',
  'Incoloy 800/800H/800HT/825 Flanges',
  'Hastelloy C22/C276 Forged Fittings',
  'Inconel 600/601/625/718 Forged Fittings',
  'Monel 400/K500 Forged Fittings',
  'Nickel 200/201 Forged Fittings',
  'Titanium Grade 1 Forged Fittings',
  'A691 1.25 1-1/4 Cr Welded Pipes',
  'Aluminium Alloy Pipes & Tubes',
  'Hastelloy C22/C276 Pipes & Tubes',
  '253 MA Pipes & Tubes',
  'Alloy 20 Sheets and Plates',
  'Alloy Steel Gr 11 Sheets and Plates',
  'Aluminium 5083 Sheets and Plates',
  'API 5L X-Series Sheets & Plates',
  'Copper Nickel 90/10 Sheet & Plate',
  'Duplex Steel S31803/S32205 Sheets and Plates',
  'Hastelloy C22/C276 Sheets and Plates',
  'Inconel 600/601/625/718 Sheets and Plates',
  'Monel 400/K500 Sheets and Plates',
  'Nickel 200/201 Sheets and Plates',
  'Stainless Steel 409L Sheets and Plates',
  'Stainless Steel 317/317L Sheets and Plates',
  'Titanium Alloy Gr 9 Sheets and Plates',
  'Alloy 20 Round Bar & Rods',
  'Alloy Steel F1 Round Bar & Rods',
  'Brass Round Bar & Rods',
  'High Strength and High Tensile Steel Round Bar',
  'Cupro Nickel 70/30 Round Bar & Rods',
  'Duplex Steel S31803/S32205 Round Bar & Rods',
  'Hastelloy C22/C276 Round Bar & Rods',
  'Incoloy 800/800H/800HT/825 Round Bar & Rods',
  'Monel 400/K500 Round Bar & Rods',
  'Nickel 200/201 Round Bar & Rods',
  'Stainless Steel 316LVM Round Bar & Rods',
  'Stainless Steel 15-5PH Round Bar & Rods',
  'Tantalum R05200/R05400 Round Bar & Rods',
  'Titanium Gr 1 Round Bar & Rods',
  '15Mo3 Steel Plates & Sheets',
  '16Mo3 / SA 204 Steel Plates & Sheets',
  'AR 500 Plates',
  'Armour Steel Plates & Sheets',
  'ASTM A516 Grade 60 Plates & Sheets',
  'Corten Steel A588 Grade Plates & Sheets',
  'DSQ Plates',
  '12-14% Manganese Steel Plates & Sheets',
  'JFE HITEN 780LE Steel Plates & Sheets',
  'Tiscral Sailhard Plates'
];

const files = [
  'buttweld.json', 'fasteners.json', 'flanges.json', 'forged.json',
  'seamless.json', 'sheets.json', 'round.json', 'reactangular.json'
];

let allProducts = [];
for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/products', file), 'utf8'));
  allProducts.push(...data);
}

const map = {};

for (const target of mismatches) {
  let bestMatch = null;
  let maxScore = 0;

  const wordsT = target.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);

  for (const product of allProducts) {
    if (product.title === target) {
      bestMatch = product;
      break;
    }
    const wordsP = product.title.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
    
    let score = 0;
    for (const w of wordsT) {
      if (wordsP.includes(w)) score++;
    }
    
    if (score > maxScore && score >= 2) {
      maxScore = score;
      bestMatch = product;
    }
  }

  if (bestMatch && bestMatch.title !== target) {
    map[target] = bestMatch.title;
  }
}

fs.writeFileSync('src/data/productAliases.ts', `export const productAliases: Record<string, string> = ${JSON.stringify(map, null, 2)};\n`);
console.log('Created src/data/productAliases.ts');

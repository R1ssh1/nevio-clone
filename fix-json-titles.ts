import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mappings: Record<string, Record<string, string>> = {
  'buttweld.json': {
    'Hastelloy Buttweld Fittings': 'Hastelloy C22/C276 Buttweld Fittings',
    'Titanium Alloy Buttweld Fittings': 'Titanium Gr 1/2/5/9 Buttweld Fittings'
  },
  'fasteners.json': {
    'Duplex Steel Fasteners': 'Duplex Steel S31803/S32205 Fasteners',
    'Nickel Alloy Fasteners': 'Nickel Alloy 200/201 Fasteners'
  },
  'flanges.json': {
    'Copper Nickel Flanges': 'Copper Nickel Alloy 70 / 30 Flanges',
    'Duplex Steel Flanges': 'Duplex Steel S31803/S32205 Flanges',
    'Incoloy Flanges': 'Incoloy 800/800H/800HT/825 Flanges'
  },
  'forged.json': {
    'Hastelloy Forged Fittings': 'Hastelloy C22/C276 Forged Fittings',
    'Inconel Forged Fittings': 'Inconel 600/601/625/718 Forged Fittings',
    'Monel Forged Fittings': 'Monel 400/K500 Forged Fittings',
    'Nickel Alloy Forged Fittings': 'Nickel 200/201 Forged Fittings',
    'Titanium Alloy Forged Fittings': 'Titanium Grade 1 Forged Fittings'
  },
  'seamless.json': {
    'Alloy Steel A691 Welded Pipes': 'A691 1.25 1-1/4 Cr Welded Pipes',
    'Aluminium Pipes & Tubes': 'Aluminium Alloy Pipes & Tubes',
    'Hastelloy Pipes & Tubes': 'Hastelloy C22/C276 Pipes & Tubes',
    'SS 253 MA Pipes & Tubes': '253 MA Pipes & Tubes'
  },
  'sheets.json': {
    'Alloy 20 Sheets & Plates': 'Alloy 20 Sheets and Plates',
    'Alloy Steel Sheets & Plates': 'Alloy Steel Gr 11 Sheets and Plates',
    'Aluminium Sheets & Plates': 'Aluminium 5083 Sheets and Plates',
    'Carbon Steel API 5L Sheets & Plates': 'API 5L X-Series Sheets & Plates',
    'Copper Nickel Sheets & Plates': 'Copper Nickel 90/10 Sheet & Plate',
    'Duplex Steel Sheets & Plates': 'Duplex Steel S31803/S32205 Sheets and Plates',
    'Hastelloy Sheets & Plates': 'Hastelloy C22/C276 Sheets and Plates',
    'Inconel Sheets & Plates': 'Inconel 600/601/625/718 Sheets and Plates',
    'Monel Sheets & Plates': 'Monel 400/K500 Sheets and Plates',
    'Nickel Alloy Sheets & Plates': 'Nickel 200/201 Sheets and Plates',
    'SS 409L Sheets & Plates': 'Stainless Steel 409L Sheets and Plates',
    'SS 317/317L Sheets & Plates': 'Stainless Steel 317/317L Sheets and Plates',
    'Titanium Sheets & Plates': 'Titanium Alloy Gr 9 Sheets and Plates'
  },
  'round.json': {
    'Alloy 20 Round Bars': 'Alloy 20 Round Bar & Rods',
    'Alloy Steel Round Bars': 'Alloy Steel F1 Round Bar & Rods',
    'Brass Round Bars': 'Brass Round Bar & Rods',
    'Carbon Steel High Yield Round Bars': 'High Strength and High Tensile Steel Round Bar',
    'Copper Nickel Round Bars': 'Cupro Nickel 70/30 Round Bar & Rods',
    'Duplex Steel Round Bars': 'Duplex Steel S31803/S32205 Round Bar & Rods',
    'Hastelloy Round Bars': 'Hastelloy C22/C276 Round Bar & Rods',
    'Incoloy Round Bars': 'Incoloy 800/800H/800HT/825 Round Bar & Rods',
    'Monel Round Bars': 'Monel 400/K500 Round Bar & Rods',
    'Nickel Alloy Round Bars': 'Nickel 200/201 Round Bar & Rods',
    'SS 316LVM Round Bars': 'Stainless Steel 316LVM Round Bar & Rods',
    'SS 15-5PH Round Bars': 'Stainless Steel 15-5PH Round Bar & Rods',
    'Tantalum Round Bars': 'Tantalum R05200/R05400 Round Bar & Rods',
    'Titanium Round Bars': 'Titanium Gr 1 Round Bar & Rods'
  },
  'reactangular.json': {
    '15Mo3 Plates': '15Mo3 Steel Plates & Sheets',
    '16Mo3 Plates': '16Mo3 / SA 204 Steel Plates & Sheets',
    'AR 500 Plates': 'AR 500 Plates',
    'Armour Steel Plates': 'Armour Steel Plates & Sheets',
    'ASTM A516 Grade 60 Plates': 'ASTM A516 Grade 60 Plates & Sheets',
    'Corten Steel Plates': 'Corten Steel A588 Grade Plates & Sheets',
    'DSQ Plates': 'DSQ Plates',
    'Manganese Steel Plates': '12-14% Manganese Steel Plates & Sheets',
    'JFE HITEN 780LE Plates': 'JFE HITEN 780LE Steel Plates & Sheets',
    'Tiscral / Sailhard Plates': 'Tiscral Sailhard Plates'
  }
};

let totalUpdated = 0;

for (const [filename, fileMappings] of Object.entries(mappings)) {
  const filePath = path.join(__dirname, 'src/data/products', filename);
  if (!fs.existsSync(filePath)) continue;

  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updated = 0;

  for (const product of data) {
    if (fileMappings[product.title]) {
      console.log(`Replacing '${product.title}' with '${fileMappings[product.title]}' in ${filename}`);
      product.title = fileMappings[product.title];
      updated++;
      totalUpdated++;
    }
  }

  if (updated > 0) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }
}

console.log(`Total products renamed: ${totalUpdated}`);

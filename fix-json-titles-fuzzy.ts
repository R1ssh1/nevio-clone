import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonFiles = [
  'buttweld.json',
  'fasteners.json',
  'flanges.json',
  'forged.json',
  'reactangular.json',
  'round.json',
  'seamless.json',
  'sheets.json',
  'uncategorized.json'
];

// The exact names from the mismatch list
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

let totalRenamed = 0;

for (const file of jsonFiles) {
  const filePath = path.join(__dirname, 'src/data/products', file);
  if (!fs.existsSync(filePath)) continue;

  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updated = 0;

  for (const targetName of mismatches) {
    // Try to find the closest match in this file
    // First, let's normalize the targetName
    const normalize = (s: string) => s.toLowerCase().replace(/stainless steel/g, 'ss').replace(/[^a-z0-9]/g, '');
    const nt = normalize(targetName);
    
    // Check if any product in data is a close match (e.g. contains the same first word and last word)
    let bestMatch = null;
    let maxScore = 0;

    for (const product of data) {
      if (product.title === targetName) continue; // Already exact match
      const np = normalize(product.title);
      
      // Calculate a simple similarity score based on shared words
      const wordsT = targetName.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
      const wordsP = product.title.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
      
      let score = 0;
      for (const w of wordsT) {
        if (wordsP.includes(w)) score++;
      }
      
      // Must match at least some key words to be considered
      // e.g. "Titanium Gr 1/2/5/9 Buttweld Fittings" vs "Titanium Alloy Buttweld Fittings" -> matches Titanium, Buttweld, Fittings
      if (score > maxScore && score >= 2) {
        maxScore = score;
        bestMatch = product;
      }
    }

    if (bestMatch && maxScore >= Math.min(3, targetName.split(' ').length - 1)) {
      console.log(`Replacing '${bestMatch.title}' with '${targetName}' in ${file}`);
      bestMatch.title = targetName;
      updated++;
      totalRenamed++;
    }
  }

  if (updated > 0) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }
}

console.log(`Total products renamed via fuzzy matching: ${totalRenamed}`);

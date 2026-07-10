import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function sanitize() {
  const filePath = path.join(process.cwd(), 'src/data/productDetails.ts');
  const rawFile = fs.readFileSync(filePath, 'utf-8');
  
  // Keep the interfaces at the top
  const splitIndex = rawFile.indexOf('export const dynamicCategories');
  if (splitIndex === -1) {
    throw new Error('Could not find dynamicCategories export in file');
  }
  const topPart = rawFile.slice(0, splitIndex);

  // Load the data dynamically
  const m = await import('../src/data/productDetails.ts');
  
  // Clone the data to modify it
  const dynamicCategories = JSON.parse(JSON.stringify(m.dynamicCategories));
  const dynamicProducts = JSON.parse(JSON.stringify(m.dynamicProducts));

  const SHANKAR_MANSION_REGEX = /Shankar Mansion/i;
  
  const replacers = [
    { regex: /Champak Steel & Engg\. Co\./gi, replacement: "Vedantara Metal & Alloys" },
    { regex: /Champak Steel and Engg\. Co\./gi, replacement: "Vedantara Metal & Alloys" },
    { regex: /Champak Steel House/gi, replacement: "Vedantara Metal & Alloys" },
    { regex: /Champak Steel/gi, replacement: "Vedantara Metal & Alloys" },
    { regex: /Champak steel/gi, replacement: "Vedantara Metal & Alloys" },
    { regex: /champaksteel\.com/gi, replacement: "vedantarametals.com" },
    { regex: /champak/gi, replacement: "Vedantara Metal & Alloys" }
  ];

  function cleanString(str) {
    let result = str;
    for (const {regex, replacement} of replacers) {
      result = result.replace(regex, replacement);
    }
    return result;
  }

  function cleanArray(arr) {
    const cleaned = [];
    for (const item of arr) {
      if (typeof item === 'string') {
        if (SHANKAR_MANSION_REGEX.test(item)) {
          continue; // Drop the entire paragraph
        }
        cleaned.push(cleanString(item));
      } else {
        cleaned.push(item);
      }
    }
    return cleaned;
  }

  // Sanitize dynamicCategories
  for (const cat of dynamicCategories) {
    if (cat.description) {
      cat.description = cleanArray(cat.description);
    }
  }

  // Sanitize dynamicProducts
  for (const prod of dynamicProducts) {
    if (prod.description) {
      prod.description = cleanArray(prod.description);
    }
    if (prod.tables) {
      for (const table of prod.tables) {
        if (table.rows) {
          const cleanedRows = [];
          for (const row of table.rows) {
            let hasAddress = false;
            for (const cell of row) {
               if (typeof cell === 'string' && SHANKAR_MANSION_REGEX.test(cell)) {
                  hasAddress = true;
                  break;
               }
            }
            
            if (hasAddress) {
              continue; // Drop the entire row
            }

            const cleanedRow = row.map(cell => typeof cell === 'string' ? cleanString(cell) : cell);
            cleanedRows.push(cleanedRow);
          }
          table.rows = cleanedRows;
        }
      }
    }
  }

  // Serialize back to file
  const outCategories = `export const dynamicCategories: DynamicCategory[] = ${JSON.stringify(dynamicCategories, null, 2)};\n`;
  const outProducts = `export const dynamicProducts: DynamicProduct[] = ${JSON.stringify(dynamicProducts, null, 2)};\n`;

  const finalOutput = topPart + outCategories + '\n' + outProducts;
  
  fs.writeFileSync(filePath, finalOutput, 'utf-8');
  console.log('Sanitization complete!');
}

sanitize().catch(console.error);

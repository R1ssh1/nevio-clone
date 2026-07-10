import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logText = fs.readFileSync('C:/Users/rishi/.gemini/antigravity-ide/brain/792b3119-dd86-432c-9b6b-abac5ccad567/.system_generated/tasks/task-578.log', 'utf8');
const lines = logText.split('\n').filter(l => l.startsWith('Replacing '));

const replacements = lines.map(line => {
  const match = line.match(/Replacing '(.*?)' with '(.*?)' in (.*?)$/);
  if (match) {
    return {
      original: match[1],
      renamed: match[2],
      file: match[3]
    };
  }
  return null;
}).filter(Boolean);

// Reverse the array to undo in exact reverse order
replacements.reverse();

for (const rep of replacements) {
  if (!rep) continue;
  const filePath = path.join(__dirname, 'src/data/products', rep.file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  let found = false;
  for (const product of data) {
    // Only undo if it matches what we renamed it to!
    if (product.title === rep.renamed) {
      product.title = rep.original;
      found = true;
      break; // Only undo one instance
    }
  }
  if (found) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } else {
    console.log(`Could not find ${rep.renamed} to revert to ${rep.original} in ${rep.file}`);
  }
}

console.log('Revert complete');

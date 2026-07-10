const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\rishi\\.gemini\\antigravity-ide\\brain\\792b3119-dd86-432c-9b6b-abac5ccad567';
const targetDir = 'public/assets/pipes&tubes';

// Find the actual files
const files = fs.readdirSync(baseDir).filter(f => f.endsWith('.png'));

const images = {
  stainless_steel: files.find(f => f.startsWith('stainless_steel_pipes')),
  carbonsteel: files.find(f => f.startsWith('carbon_steel_pipes')),
  alloysteel: files.find(f => f.startsWith('alloy_steel_pipes')),
  titanium: files.find(f => f.startsWith('titanium_pipes')),
  coppernickel: files.find(f => f.startsWith('copper_nickel_pipes')),
  aluminiumalloy: files.find(f => f.startsWith('aluminium_pipes'))
};

// Also map alloy20 and alloysteelwelded
images.alloy20 = images.stainless_steel; // Just fallback to stainless for alloy20
images.alloysteelwelded = images.alloysteel;

// Copy files
for (const [key, filename] of Object.entries(images)) {
  if (filename) {
    const src = path.join(baseDir, filename);
    const destDir = path.join(targetDir, key);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(src, path.join(destDir, 'hero.png'));
  }
}

// Update seamless.json
const dataPath = 'src/data/products/seamless.json';
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

data.forEach(product => {
  const title = product.title.toLowerCase();
  let materialKey = 'stainless_steel'; // default

  if (title.includes('carbon')) materialKey = 'carbonsteel';
  else if (title.includes('titanium')) materialKey = 'titanium';
  else if (title.includes('aluminium') || title.includes('aluminum')) materialKey = 'aluminiumalloy';
  else if (title.includes('copper') || title.includes('cupro')) materialKey = 'coppernickel';
  else if (title.includes('alloy') && !title.includes('nickel')) materialKey = 'alloysteel';
  else if (title.includes('nickel')) materialKey = 'alloy20'; // roughly
  else if (title.includes('duplex')) materialKey = 'stainless_steel';
  else if (title.includes('304') || title.includes('316') || title.includes('ss')) materialKey = 'stainless_steel';

  product.images = [`/assets/pipes&tubes/${materialKey}/hero.png`];
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log('Done mapping images and updating JSON.');

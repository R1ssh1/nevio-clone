const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'productDetails.ts');

if (!fs.existsSync(filePath)) {
  console.error("File not found:", filePath);
  process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  { from: /â€"/g, to: '–' },
  { from: /Â°/g, to: '°' },
  { from: /Â®/g, to: '®' },
  { from: /â€˜/g, to: "'" },
  { from: /â€™/g, to: "'" },
  { from: /â€¢/g, to: "•" }, // bullet point sometimes shows up this way
  { from: /Â/g, to: '' }, // stray Â characters
];

let replaced = content;
replacements.forEach(r => {
  replaced = replaced.replace(r.from, r.to);
});

if (replaced !== content) {
  fs.writeFileSync(filePath, replaced, 'utf8');
  console.log("Mojibake sanitization complete!");
} else {
  console.log("No mojibake found.");
}

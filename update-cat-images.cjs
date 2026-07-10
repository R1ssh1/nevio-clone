const fs = require('fs');
const path = require('path');

const files = [
  'PipesTubesPage.tsx',
  'RoundBarsPage.tsx',
  'SheetsCoilsPage.tsx',
  'FlangesPage.tsx',
  'ForgedFittingsPage.tsx',
  'ButtweldFittingsPage.tsx',
  'FastenersPage.tsx',
  'HollowSectionsPage.tsx'
];

const basePath = path.join(__dirname, 'src', 'pages');

// Replace the simple `const imgSrc = fallbackImages[index % fallbackImages.length];`
// with the smart version that tries the first product's image path first.
const oldImgSrc = `const imgSrc = fallbackImages[index % fallbackImages.length];`;
const newImgSrc = `const firstProduct = sub.productLinks[0];
                        const imgSrc = firstProduct
                          ? \`/assets/products/\${firstProduct.slug}.png\`
                          : fallbackImages[index % fallbackImages.length];`;

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes(oldImgSrc)) {
    content = content.replace(oldImgSrc, newImgSrc);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated image resolution in ${file}`);
  } else {
    console.log(`Pattern not found in ${file} — skipped`);
  }
});

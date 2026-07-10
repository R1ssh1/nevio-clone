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
  'HollowSectionsPage.tsx',
  'WiresPage.tsx',
];

const OLD = `<img src={imgSrc} alt={sub.name} loading="lazy" />`;
const NEW = `<img
                                            src={imgSrc}
                                            alt={sub.name}
                                            loading="lazy"
                                            onError={(e) => { (e.target as HTMLImageElement).src = '/assets/home/product-6.webp'; }}
                                        />`;

const basePath = path.join(__dirname, 'src', 'pages');

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) {
    console.log(`NOT FOUND: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes(OLD)) {
    content = content.replace(OLD, NEW);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅  Updated: ${file}`);
  } else {
    // Try to find the img tag with any whitespace variation
    const regex = /<img\s+src=\{imgSrc\}\s+alt=\{sub\.name\}\s+loading="lazy"\s*\/>/;
    if (regex.test(content)) {
      content = content.replace(regex, NEW);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✅  Updated (regex): ${file}`);
    } else {
      console.log(`⚠️  Pattern not found: ${file}`);
    }
  }
});

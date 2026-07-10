const fs = require('fs');

const mappings = {
  'buttweld': '/assets/categories/buttweld.webp',
  'fasteners': '/assets/categories/fasteners.webp',
  'flanges': '/assets/categories/flanges.webp',
  'forged': '/assets/categories/forged.webp',
  'reactangular': '/assets/categories/hollow-sections.webp' // Hollow Sections
};

for (const [filename, imgPath] of Object.entries(mappings)) {
  const dataPath = `src/data/products/${filename}.json`;
  if (fs.existsSync(dataPath)) {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    let updated = 0;
    data.forEach(product => {
      // Only map if empty or has fallback product-6
      if (!product.images || product.images.length === 0 || product.images[0].includes('product-6')) {
        product.images = [imgPath];
        updated++;
      }
    });
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    console.log(`Updated ${updated} products in ${filename}.json to use ${imgPath}`);
  }
}

console.log("All missing product images have been mapped to the new category images! You can now restart your dev server if necessary.");

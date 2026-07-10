const fs = require('fs');
const path = require('path');

const { dynamicProducts } = require('./src/data/productDetails.ts');

const JUNK_SIZES = [57214];

function getValidImages(images) {
    if (!images) return [];
    const valid = [];
    for (const img of images) {
        // img is like '/assets/products/file.jpg'
        const localPath = path.join(__dirname, 'public', img);
        try {
            const stat = fs.statSync(localPath);
            if (stat.size < 5000) continue; // skip small icons
            if (JUNK_SIZES.includes(stat.size)) continue; // skip known generic
            valid.push(img);
        } catch(e) {
            // file doesn't exist?
        }
    }
    return valid;
}

// Test on first 10 products
for (const p of dynamicProducts.slice(0, 20)) {
    const valid = getValidImages(p.images);
    console.log(p.productName);
    console.log("Original:", p.images?.length || 0, "Valid:", valid.length);
    if (valid.length > 0) {
        console.log(" -> Kept:", valid[0]);
    }
}

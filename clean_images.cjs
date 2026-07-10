const fs = require('fs');
const path = require('path');

const JUNK_SIZES = [57214];

function getValidImages(images) {
    if (!images || !Array.isArray(images)) return [];
    const valid = [];
    for (const img of images) {
        // e.g. /assets/products/foo.jpg
        // Note: some images might be /assets/specialized/...
        let localPath = path.join(__dirname, 'public', img);
        
        try {
            const stat = fs.statSync(localPath);
            if (stat.size < 5000) continue; // skip social buttons, blank images
            if (JUNK_SIZES.includes(stat.size)) continue; // skip the specific generic oil rig image
            valid.push(img);
        } catch(e) {
            // If file doesn't exist locally, it might be an external URL or missing.
            // Let's assume missing files are invalid, unless they start with http
            if (img.startsWith('http')) {
                valid.push(img);
            }
        }
    }
    return valid;
}

function processFile(filePath) {
    const absolutePath = path.join(__dirname, filePath);
    let content = fs.readFileSync(absolutePath, 'utf8');
    
    // We will parse the content by running it if possible, but writing it back is hard.
    // Instead of regex replacing the whole file, let's use a regex to find the "images": [ ... ] block
    // and replace it.
    let updatedContent = content.replace(/"images":\s*\[([\s\S]*?)\]/g, (match, inner) => {
        // parse the array
        let arr;
        try {
            arr = JSON.parse('[' + inner + ']');
        } catch(e) {
            return match; // fallback if not parseable
        }
        const valid = getValidImages(arr);
        // User said: "For each product, place only its relevant valid image"
        // Let's just keep the first valid one if multiple exist, to ensure it's ONLY the relevant one.
        // Wait, keeping all valid is safer, but UI only uses images[0]. Let's keep all valid for now.
        if (valid.length > 0) {
            return '"images": ' + JSON.stringify(valid, null, 2).replace(/\n/g, '\n      ');
        } else {
            return '"images": []';
        }
    });
    
    fs.writeFileSync(absolutePath, updatedContent);
    console.log(`Updated ${filePath}`);
}

processFile('src/data/productDetails.ts');
processFile('src/data/specializedProductDetails.ts');

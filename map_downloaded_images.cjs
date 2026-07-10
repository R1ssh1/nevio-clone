const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'product_images');
const destDir = path.join(__dirname, 'public', 'assets', 'product_images');

// 1. Create target directory
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// 2. Move files
if (fs.existsSync(srcDir)) {
    const files = fs.readdirSync(srcDir);
    for (const file of files) {
        if (!file.endsWith('.crdownload')) {
            fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
        }
    }
}

// 3. Mapping logic
const availableImages = fs.readdirSync(destDir).filter(f => !f.endsWith('.crdownload'));

function getBestImageMatch(title, category) {
    const t = title.toLowerCase();
    
    // First try exact or very strong matches
    if (t.includes('alloy 20') && t.includes('round bar')) return 'alloy-20-round-bar-1000x1000.webp';
    if (t.includes('alloy 20') && (t.includes('sheet') || t.includes('plate'))) return 'alloy-20-sheet.jpg';
    if (t.includes('brass') && t.includes('round bar')) return 'brass-round-bar-c360-scaled.webp';
    if (t.includes('copper nickel') || t.includes('cupro nickel')) return 'copper-nickel-alloy-500x500-1-300x300.jpg';
    if (t.includes('mild steel') && t.includes('bar')) return 'mild-steel-bars-500x500.webp';
    if (t.includes('monel') && t.includes('pipe')) return 'monel-400-k500-pipes-tubes.jpg';
    if (t.includes('smo 254') && t.includes('pipe')) return 'smo-254-pipes-manufacturers-exporters-suppliers-stockists.jpg';
    if (t.includes('stainless') && t.includes('20') && t.includes('plate')) return 'stainless-steel-20-plates.jpg';
    if (t.includes('303') && t.includes('round bar')) return 'stainless-steel-303-grade-round-bar-rod-1000x1000.webp';
    if (t.includes('310') && (t.includes('sheet') || t.includes('plate'))) return 'stainless-steel-310-310s-sheet-plate-coils.jpg';
    if (t.includes('317') && (t.includes('sheet') || t.includes('plate'))) return 'stainless-steel-317l-sheets-plates.jpg';
    if (t.includes('254') && t.includes('sheet')) return 'steel-254-sheets.jpg';
    
    // Looser matches based on categories and generic materials
    if (category === 'pipes-tubes') {
        if (t.includes('253ma')) return 'Seamless-Stainless-Steel-253Ma-Tube.png';
        if (t.includes('titanium')) return 'industrial-price-titanium-rods-bars-high-quality-diameter-10mm-15mm-25mm-titanium-round-bar-titanium-material-rod1-0559407001648699507.jpg.webp';
    }
    if (category === 'round-bars') {
        if (t.includes('stainless')) return 'Stainless-Round-bar-scaled.jpg';
        if (t.includes('steel')) return 'MKH_steel-bars.jpg';
    }
    if (category === 'sheets-coils') {
        if (t.includes('aluminum') || t.includes('aluminium')) {
            if (t.includes('embossed')) return 'Embossed-ASTM-5083-6061-7075-2mm-3mm-Thickness-Aluminum-Sheets-Plates.avif';
            return 'AISI-ASTM-5083-6061-7075-Aluminium-Plate-Price-1050-2024-3003-Aluminum-Zinc-Alloy-Sheet.avif';
        }
        if (t.includes('carbon') || t.includes('mild')) return 'ASTM-A36-St37-S235-S275-S355-Hot-Rolled-Hr-Mild-Carbon-Steel-Sheet-Plate.avif';
        if (t.includes('copper nickel')) return 'ps141510860-70_30_90_10_cuni_c70600_c71500_copper_nickel_sheet.jpg';
        return 'stainless-steel.jpg';
    }
    if (t.includes('hastelloy') || t.includes('inconel') || t.includes('monel')) {
        return 'Hastelloy-Alloy-C22-Uns-N06022-Nicr21mo14W-Hastelloy-C276-C22-G30-Inconel-600-601-625-X-750-718-825-Monel-500-K500-400-Nickel-200-201-205-Alloy-Round-Bar-Rod.avif';
    }
    if (t.includes('flange') && availableImages.includes('flanges.webp')) return 'flanges.webp';
    if (t.includes('fastener') && availableImages.includes('fasteners.webp')) return 'fasteners.webp';
    
    // Fallback: see if any available image filename overlaps with title keywords
    for (const img of availableImages) {
        const imgName = img.toLowerCase().replace(/\.[^/.]+$/, "");
        if (t.includes(imgName)) return img;
    }
    
    return null;
}

const productDataDir = path.join(__dirname, 'src', 'data', 'products');
const jsonFiles = fs.readdirSync(productDataDir).filter(f => f.endsWith('.json'));

let totalUpdated = 0;

for (const file of jsonFiles) {
    const dataPath = path.join(productDataDir, file);
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    let updated = false;
    
    const category = file.replace('.json', '');
    
    data.forEach(product => {
        // Only map if empty or has fallback product-6 or fallback images that might need better specificity
        const isMissingOrGeneric = !product.images || product.images.length === 0 || product.images[0].includes('product-6') || product.images[0].includes('assets/home');
        
        if (isMissingOrGeneric) {
            const bestImage = getBestImageMatch(product.title, product.category || category);
            if (bestImage) {
                product.images = [`/assets/product_images/${bestImage}`];
                updated = true;
                totalUpdated++;
            }
        }
    });
    
    if (updated) {
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    }
}

console.log(`Mapped ${totalUpdated} products to new images.`);

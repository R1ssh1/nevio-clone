const fs = require('fs');

function patchHollow() {
    let content = fs.readFileSync('src/pages/HollowSectionsPage.tsx', 'utf8');
    content = content.replace("import { toSlug } from '../data/slug'", "import { dynamicCategories } from '../data/productDetails'");
    content = content.replace(/const stainlessSteelHollowGrades = \[[\s\S]*?const specifications = \[[\s\S]*?\]/m, "const cat = dynamicCategories.find(c => c.slug === 'hollow-sections')!;");
    fs.writeFileSync('src/pages/HollowSectionsPage.tsx', content);
}

function patchWires() {
    let content = fs.readFileSync('src/pages/WiresPage.tsx', 'utf8');
    content = content.replace("import { toSlug } from '../data/slug'", "import { dynamicCategories } from '../data/productDetails'");
    content = content.replace(/const stainlessSteelWireGrades = \[[\s\S]*?const specifications = \[[\s\S]*?\]/m, "const cat = dynamicCategories.find(c => c.slug === 'wires')!;");
    fs.writeFileSync('src/pages/WiresPage.tsx', content);
}

patchHollow();
patchWires();

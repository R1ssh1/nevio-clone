const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = [
    'ButtweldFittingsPage.tsx',
    'FastenersPage.tsx',
    'FlangesPage.tsx',
    'ForgedFittingsPage.tsx',
    'HollowSectionsPage.tsx',
    'PipesTubesPage.tsx',
    'RoundBarsPage.tsx',
    'SheetsCoilsPage.tsx',
    'WiresPage.tsx'
];

pages.forEach(page => {
    const filePath = path.join(pagesDir, page);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace gap: '4rem' with gap: '2.5rem'
    content = content.replace(/gap:\s*'4rem'/g, "gap: '2.5rem'");
    // Replace paddingBottom: ... ? '4rem' : '0' with '2.5rem'
    content = content.replace(/'4rem'\s*:\s*'0'/g, "'2.5rem' : '0'");

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated gap in ${page}`);
});

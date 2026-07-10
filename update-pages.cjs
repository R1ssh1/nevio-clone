const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'ButtweldFittingsPage.tsx', slug: 'buttweld-fittings', ssVar: 'stainlessSteelButtweldGrades', tiVar: 'titaniumButtweldGrades', specVar: 'specialtyButtweld' },
  { file: 'FastenersPage.tsx', slug: 'fasteners', ssVar: 'stainlessSteelFastenersGrades', tiVar: 'titaniumFastenersGrades', specVar: 'specialtyFasteners' },
  { file: 'FlangesPage.tsx', slug: 'flanges', ssVar: 'stainlessSteelFlangeGrades', tiVar: 'titaniumFlangeGrades', specVar: 'specialtyFlanges' },
  { file: 'ForgedFittingsPage.tsx', slug: 'forged-fittings', ssVar: 'stainlessSteelForgedGrades', tiVar: 'titaniumForgedGrades', specVar: 'specialtyForged' },
  { file: 'PipesTubesPage.tsx', slug: 'pipes-tubes', ssVar: 'stainlessSteelPipeGrades', tiVar: 'titaniumPipeGrades', specVar: 'specialtyPipes' },
  { file: 'RoundBarsPage.tsx', slug: 'round-bars', ssVar: 'stainlessSteelBarGrades', tiVar: 'titaniumBarGrades', specVar: 'specialtyBars' },
  { file: 'SheetsCoilsPage.tsx', slug: 'sheets-coils', ssVar: 'stainlessSteelSheetGrades', tiVar: 'titaniumSheetGrades', specVar: 'specialtySheets' }
];

for (const page of pages) {
  const filePath = path.join(__dirname, 'src/pages', page.file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace imports
  content = content.replace(
    /import \{ toSlug \} from '\.\.\/data\/slug'\s*/,
    `import { dynamicCategories } from '../data/productDetails'\n`
  );

  // Define new variables
  const newVars = `
const cat = dynamicCategories.find(c => c.slug === '${page.slug}')!;
const ${page.ssVar} = cat?.subcategories.find(s => s.name.includes('Stainless'))?.productLinks || [];
const ${page.tiVar} = cat?.subcategories.find(s => s.name.includes('Titanium'))?.productLinks || [];
const ${page.specVar} = cat?.subcategories.filter(s => !s.name.includes('Stainless') && !s.name.includes('Titanium')).flatMap(s => s.productLinks) || [];
`;

  // Remove old arrays
  const arrayRegex = new RegExp(`const (${page.ssVar}|${page.tiVar}|${page.specVar}) = \\[[\\s\\S]*?\\];?\\n`, 'g');
  
  let matchedFirst = false;
  content = content.replace(arrayRegex, (match, p1) => {
    if (!matchedFirst) {
      matchedFirst = true;
      return newVars;
    }
    return ''; // remove the others
  });

  // Replace keys
  content = content.replace(/key=\{g\}/g, 'key={g.slug}');
  
  // Replace links
  content = content.replace(/to=\{\`\/products\/([^\/]+)\/\$\{toSlug\(g\)\}\`\}/g, 'to={`/products/$1/${g.slug}`}');
  
  // Replace text
  content = content.replace(/>\{g\}<\/Link>/g, '>{g.name}</Link>');

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${page.file}`);
}

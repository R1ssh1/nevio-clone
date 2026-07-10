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

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove `const isEven = index % 2 === 0;` (and variations with different spacing)
  content = content.replace(/[ \t]*const\s+isEven\s*=\s*index\s*%\s*2\s*===\s*0;\n?/, '');

  // Replace the <article className="feature-split"...> block
  const articleRegex = /return\s*\(\s*<article className="feature-split"[\s\S]*?<\/article>\s*\)/;
  
  const replacement = `return (
                            <article className="cat-subcat-row" key={sub.name}>
                              <div className="cat-subcat-img">
                                <img src={imgSrc} alt={sub.name} loading="lazy" />
                              </div>
                              <div className="cat-subcat-content">
                                <h2 className="cat-subcat-title">{sub.name}</h2>
                                <ul className="cat-subcat-links">
                                  {sub.productLinks.map(g => (
                                    <li key={g.slug}>
                                      <Link to={\`/products/\${cat.slug}/\${g.slug}\`}>
                                        <span className="cat-link-arrow">→</span>
                                        {g.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </article>
                        )`;
  
  content = content.replace(articleRegex, replacement);

  // Remove feature-split import if it exists (e.g., import '../styles-cards.css' or similar if they meant that, but let's just look for 'feature-split' imports)
  // Actually, the prompt says "remove the unused `.feature-split` import and usage". This might mean `import '../components/FeatureSplit'`? No, it's a class. Wait, maybe there's no import. We'll just remove any line matching feature-split if it's an import.
  content = content.split('\n').filter(line => !(line.includes('import') && line.includes('feature-split'))).join('\n');

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${file}`);
});

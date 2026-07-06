const fs = require('fs');
const path = require('path');

// Mapping of champak pages to our categories
const files = {
  'pipes-tubes': 'champak-seamless-welded-pipes-tubes-manufacturer-exporter.html',
  'sheets-coils': 'champak-sheets-plates-manufacturer-exporter.html',
  'round-bars': 'champak-round-bars-rods-manufacturer-exporter.html',
  'flanges': 'champak-flanges-manufacturer-exporter.html',
  'forged-fittings': 'champak-forged-fittings-manufacturer-exporter.html',
  'buttweld-fittings': 'champak-buttweld-fittings-manufacturer-exporter.html',
  'fasteners': 'champak-fasteners-manufacturer-exporter.html',
  'hollow-sections': 'champak-reactangular-square-hollow-section-manufacturer-exporter.html',
};

for (const [key, file] of Object.entries(files)) {
  const html = fs.readFileSync(file, 'utf8');
  
  // Find main content - extract text within the main content paragraphs
  // Champak uses <p><span>...</span></p> in the content area
  const pMatches = html.match(/<p[^>]*>[\s\S]*?<\/p>/gi) || [];
  const texts = pMatches.map(p => {
    // Strip HTML tags
    return p.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  }).filter(t => t.length > 100); // Only meaningful paragraphs

  console.log(`\n=== ${key.toUpperCase()} ===`);
  texts.forEach((t, i) => console.log(`Para ${i+1}: ${t.substring(0, 300)}...\n`));
}

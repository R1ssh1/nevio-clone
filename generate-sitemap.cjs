const fs = require('fs');
const path = require('path');

const baseUrl = 'https://vedantarametals.com';

const staticPages = [
    '',
    '/about-us',
    '/products',
    '/quality-policy',
    '/contact-us'
];

// In this simplified script, we'll extract the slugs from the TS files using regex to avoid TS compilation issues.
const productsContent = fs.readFileSync(path.join(__dirname, 'src/data/products.ts'), 'utf-8');
const gradesContent = fs.readFileSync(path.join(__dirname, 'src/data/grades.ts'), 'utf-8');

const slugRegex = /slug:\s*["']([^"']+)["']/g;
let match;
const productSlugs = [];

while ((match = slugRegex.exec(productsContent)) !== null) {
    productSlugs.push(match[1]);
}

while ((match = slugRegex.exec(gradesContent)) !== null) {
    productSlugs.push(match[1]);
}

const allPaths = [...staticPages, ...productSlugs];
const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths.map(p => `  <url>
    <loc>${baseUrl}${p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${p === '' ? '1.0' : p.startsWith('/products/') && p.split('/').length > 3 ? '0.6' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('sitemap.xml generated successfully!');

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(__dirname, 'public', 'robots.txt'), robotsTxt);
console.log('robots.txt generated successfully!');

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

    // Find the start of the sections to replace
    const startMarker = '<section className="container" style={{ marginTop: \'4rem\' }}>';
    const endMarker = '</div>\n    )\n}';

    const startIndex = content.indexOf(startMarker);
    const endIndex = content.lastIndexOf(endMarker);

    if (startIndex === -1 || endIndex === -1) {
        console.error(`Markers not found in ${page}`);
        return;
    }

    const newContent = `
            <section className="container" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: '#555', fontSize: '1.05rem', lineHeight: 1.6 }}>
                    <p style={{ marginBottom: '1.5rem' }}>{info.description1}</p>
                    <p>{info.description2}</p>
                </div>
            </section>

            <section className="container" style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {cat.subcategories.map((sub, index) => {
                        const isEven = index % 2 === 0;
                        const fallbackImages = [
                            '/assets/home/pipes-tubes.webp',
                            '/assets/home/titanium-pipes-tubes.webp',
                            '/assets/home/stainless-steel-304-pipes-tubes.webp',
                            '/assets/home/sheets-coils.webp',
                            '/assets/home/round-bars.webp',
                            '/assets/home/wires.webp'
                        ];
                        const imgSrc = fallbackImages[index % fallbackImages.length];
                        
                        return (
                            <article className="feature-split" style={{ direction: isEven ? 'ltr' : 'rtl', borderBottom: index !== cat.subcategories.length - 1 ? '1px solid #eaeaea' : 'none', paddingBottom: index !== cat.subcategories.length - 1 ? '4rem' : '0' }} key={sub.name}>
                                <div className="feature-split__media" style={{ direction: 'ltr' }}>
                                    <img src={imgSrc} alt={sub.name} loading="lazy" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '4/3' }} />
                                </div>
                                <div className="feature-split__content" style={{ direction: 'ltr', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h2 style={{ fontSize: 'clamp(1.8rem, 2vw, 2.2rem)', color: 'var(--navy)', marginBottom: '1.5rem' }}>{sub.name}</h2>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                        {sub.productLinks.map((g) => (
                                            <li key={g.slug}>
                                                <Link to={\`/products/\${cat.slug}/\${g.slug}\`} style={{ textDecoration: 'none', color: 'var(--ink)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontWeight: 600, fontSize: '1.05rem' }}>
                                                    <span style={{ color: 'var(--navy)', fontWeight: 'bold', fontSize: '1.2rem', lineHeight: 1 }}>➔]</span> 
                                                    <span className="hover-text-navy" style={{ transition: 'color 0.2s' }}>{g.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>

            {/* ── Manufacturing Capability ── */}
            <section className="container" style={{ marginBottom: '4rem' }}>
                <div className="prod-desc-band">
                    <div className="prod-desc-band__text">
                        <h3>Manufacturing Capability</h3>
                        <p>{info.description3}</p>
                    </div>
                    <div className="prod-desc-band__text">
                        <h3>Quality Assurance &amp; Delivery</h3>
                        <p>{info.description4}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
`;

    const updatedFile = content.substring(0, startIndex) + newContent.trim() + '\n';
    fs.writeFileSync(filePath, updatedFile, 'utf8');
    console.log(`Updated ${page}`);
});

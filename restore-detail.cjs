const fs = require('fs');
let code = fs.readFileSync('src/pages/ProductDetailPage.tsx', 'utf-8');

if(!code.includes('import { dynamicProducts }')) {
    code = code.replace(/import \{ productGrades \} from '\.\.\/data\/grades'/, 
        `import { productGrades } from '../data/grades'
import { dynamicProducts } from '../data/productDetails'`);
}

if(!code.includes('const dynamicInfo =')) {
    code = code.replace(/const gradeInfo = productGrades\.find\(\(g\) => g\.slug === location\.pathname\)/, 
        `const gradeInfo = productGrades.find((g) => g.slug === location.pathname)
    const dynamicInfo = dynamicProducts.find((p) => p.slug === id)`);
}

if(!code.includes('const sections: any[] = [];')) {
    const parseLogic = `
    const sections: any[] = [];
    const overview: string[] = [];

    if (dynamicInfo) {
        let descIdx = 0;
        const descriptions = dynamicInfo.description;

        while (descIdx < descriptions.length) {
            const p = descriptions[descIdx];
            if (!p.endsWith('.') && p.length < 150) break;
            overview.push(p);
            descIdx++;
        }
        
        const eqTable = dynamicInfo.tables.find(t => t.title?.toLowerCase().includes('equivalent'));
        if (eqTable) {
            sections.push({ id: 'equivalent-grades', type: 'table', data: eqTable });
        }

        const types = [];
        while (descIdx < descriptions.length) {
            const p = descriptions[descIdx];
            if (p.toLowerCase().includes('specification')) break;
            types.push(p);
            descIdx++;
        }
        if (types.length > 0) {
            sections.push({ id: 'product-types', type: 'text', title: \`Types of \${formattedTitle}\`, content: types });
        }

        const specs = [];
        let specTitle = 'Standard Specification';
        while (descIdx < descriptions.length) {
            const p = descriptions[descIdx];
            if (p.toLowerCase().includes('specification of')) {
                specTitle = p;
            } else if (p.toLowerCase().includes('application industr')) {
                break;
            } else {
                specs.push(p);
            }
            descIdx++;
        }
        if (specs.length > 0) {
            sections.push({ id: 'specifications', type: 'text', title: specTitle, content: specs });
        }

        const chemTable = dynamicInfo.tables.find(t => t.title?.toLowerCase().includes('chemical'));
        if (chemTable) sections.push({ id: 'chemical-composition', type: 'table', data: chemTable });

        const mechTable = dynamicInfo.tables.find(t => t.title?.toLowerCase().includes('mechanical'));
        if (mechTable) sections.push({ id: 'mechanical-properties', type: 'table', data: mechTable });

        const physTable = dynamicInfo.tables.find(t => t.title?.toLowerCase().includes('physical'));
        if (physTable) sections.push({ id: 'physical-properties', type: 'table', data: physTable });

        let appsTitle = 'Application Industries';
        const apps = [];
        while (descIdx < descriptions.length) {
            const p = descriptions[descIdx];
            if (p.toLowerCase().includes('application industr')) {
                appsTitle = p;
            } else if (p.split(',').length > 10) {
                sections.push({ id: 'seo-keywords', type: 'text', title: 'People Also Searched For', content: [p] });
            } else {
                apps.push(p);
            }
            descIdx++;
        }
        if (apps.length > 0) {
            sections.push({ id: 'applications', type: 'text', title: appsTitle, content: apps });
        }
    }

    return (`;
    code = code.replace(/\s*return \(\s*<div className="page-stack">/, parseLogic + '\n        <div className="page-stack">');
}

const renderLogic = `
                            {dynamicInfo ? (
                                <>
                                    <div className="toc-box">
                                        <div className="toc-header">Table Of Content</div>
                                        <ul className="toc-list">
                                            {sections.map(s => (
                                                <li key={s.id}><a href={\`#\${s.id}\`}>{s.type === 'table' ? s.data.title : s.title}</a></li>
                                            ))}
                                        </ul>
                                    </div>

                                    {overview.map((p, idx) => (
                                        <p key={idx}>{p}</p>
                                    ))}

                                    {sections.map(s => (
                                        <div key={s.id} id={s.id} className="product-detail-section">
                                            {s.type === 'text' ? (
                                                <>
                                                    {s.title && <h3>{s.title}</h3>}
                                                    {s.id === 'product-types' ? (
                                                        <div className="product-types-grid">
                                                            {s.content.map((p: string, i: number) => {
                                                                const firstComma = p.indexOf(',');
                                                                const title = firstComma > 10 ? p.substring(0, firstComma) : \`\${formattedTitle} Type \${i + 1}\`;
                                                                return (
                                                                    <div className="product-type-card" key={i}>
                                                                        <img src={heroImage} alt={title} className="product-type-img" loading="lazy" />
                                                                        <div className="product-type-title">{title}</div>
                                                                        <div className="product-type-desc">{p}</div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    ) : s.id === 'specifications' ? (
                                                        <div className="spec-list">
                                                            {s.content.map((p: string, i: number) => {
                                                                const parts = p.split(':');
                                                                if (parts.length > 1 && parts[0].length < 60) {
                                                                    return <p key={i}><strong>{parts[0]}:</strong>{parts.slice(1).join(':')}</p>
                                                                }
                                                                return <p key={i}>{p}</p>
                                                            })}
                                                        </div>
                                                    ) : (
                                                        s.content.map((p: string, i: number) => (
                                                            <p key={i} className={s.id === 'seo-keywords' ? 'seo-text' : ''}>{p}</p>
                                                        ))
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    <h3>{s.data.title}</h3>
                                                    <div className="spec-table-wrap" style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
                                                        <table className="spec-table detail-table">
                                                            {s.data.rows.length > 0 && (
                                                                <>
                                                                    <thead>
                                                                        <tr>
                                                                            {s.data.rows[0].map((cell: string, cIdx: number) => (
                                                                                <th key={cIdx}>{cell}</th>
                                                                            ))}
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {s.data.rows.slice(1).map((row: string[], rIdx: number) => (
                                                                            <tr key={rIdx}>
                                                                                {row.map((cell: string, cIdx: number) => (
                                                                                    <td key={cIdx}>{cell}</td>
                                                                                ))}
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </>
                                                            )}
                                                        </table>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </>
                            ) : gradeInfo ? (`;

if(!code.includes('dynamicInfo ? (')) {
    code = code.replace(/\{gradeInfo \? \(/, renderLogic);
}

// Find the second `{gradeInfo ? (` which is immediately after `</div>`
let idx = code.indexOf('</div>\n\n                        {gradeInfo ? (');
if(idx > -1) {
    code = code.substring(0, idx) + '</div>\n\n                        {dynamicInfo ? null : gradeInfo ? (' + code.substring(idx + 44);
} else {
    // try different spacing
    idx = code.indexOf('</div>\r\n\r\n                        {gradeInfo ? (');
    if(idx > -1) {
        code = code.substring(0, idx) + '</div>\r\n\r\n                        {dynamicInfo ? null : gradeInfo ? (' + code.substring(idx + 46);
    }
}

code = code.replace(/<section className="container" style=\{\{ marginTop: '4rem', marginBottom: '4rem' \}\}>/, 
    '<section className="container" style={{ marginTop: \'4rem\', marginBottom: \'4rem\', maxWidth: \'1170px\' }}>');

fs.writeFileSync('src/pages/ProductDetailPage.tsx', code, 'utf-8');
console.log('Restored perfectly with types and fixed ternary logic!');

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/ProductDetailPage.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

const dynamicInfoBlock = `
                            {dynamicInfo ? (
                                <>
                                    {/* Table of Contents */}
                                    <div className="toc-box">
                                        <div className="toc-header">Table Of Content</div>
                                        <ul className="toc-list">
                                            {sections.map(s => (
                                                <li key={s.id}><a href={\`#\${s.id}\`}>{s.type === 'table' ? s.data.title : s.title}</a></li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Overview */}
                                    {overview.map((p, idx) => (
                                        <p key={idx}>{p}</p>
                                    ))}

                                    {/* Sections */}
                                    {sections.map(s => (
                                        <div key={s.id} id={s.id} className="product-detail-section">
                                            {s.type === 'text' ? (
                                                <>
                                                    <h3>{s.title}</h3>
                                                    {s.content.map((p: string, i: number) => (
                                                        <p key={i} className={s.id === 'seo-keywords' ? 'seo-text' : ''}>{p}</p>
                                                    ))}
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
        
        const eqTable = dynamicInfo.tables.find(t => t.title.toLowerCase().includes('equivalent'));
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

        const chemTable = dynamicInfo.tables.find(t => t.title.toLowerCase().includes('chemical'));
        if (chemTable) sections.push({ id: 'chemical-composition', type: 'table', data: chemTable });

        const mechTable = dynamicInfo.tables.find(t => t.title.toLowerCase().includes('mechanical'));
        if (mechTable) sections.push({ id: 'mechanical-properties', type: 'table', data: mechTable });

        const physTable = dynamicInfo.tables.find(t => t.title.toLowerCase().includes('physical'));
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

    return (
`;

content = content.replace(/\s*return \(\s*<div className="page-stack">/, parseLogic + '        <div className="page-stack">');

const target1Start = "\\{dynamicInfo \\? \\(\\s*<>\\s*\\{dynamicInfo\\.description\\.map\\(\\(p, idx\\) => \\(\\s*<p key=\\{idx\\}>\\{p\\}<\\/p>\\s*\\)\\)\\}\\s*<\\/>\\s*\\) : gradeInfo \\? \\(";

content = content.replace(new RegExp(target1Start, 'g'), dynamicInfoBlock);

const idx2 = content.indexOf('{dynamicInfo.tables.map((table, idx) => (');
if (idx2 > -1) {
    const beforeIdx2 = content.lastIndexOf('{dynamicInfo ? (', idx2);
    const afterIdx2 = content.indexOf(') : gradeInfo ? (', idx2);
    if (beforeIdx2 > -1 && afterIdx2 > -1) {
        content = content.substring(0, beforeIdx2) + '                        {gradeInfo ? (' + content.substring(afterIdx2 + 17);
    }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('ProductDetailPage updated successfully.');

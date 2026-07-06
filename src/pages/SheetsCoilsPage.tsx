import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { toSlug } from '../data/slug'

const stainlessSteelSheetGrades = [
    'SS 253 MA Sheets & Plates',
    'SS 304 / 304L / 304H Sheets & Plates',
    'SS 309 / 310 / 310S Sheets & Plates',
    'SS 316 / 316L / 316Ti Sheets & Plates',
    'SS 317 / 317L Sheets & Plates',
    'SS 321 / 321H Sheets & Plates',
    'SS 347 / 347H Sheets & Plates',
    'SS 409 / 410 / 420 / 430 Sheets & Plates',
    'SS 446 Sheets & Plates',
    'SS 904L Sheets & Plates',
]

const titaniumSheetGrades = [
    'Titanium Grade 1 Sheets & Plates',
    'Titanium Grade 2 Sheets & Plates',
    'Titanium Grade 5 (Ti-6Al-4V) Sheets & Plates',
    'Titanium Grade 9 Sheets & Plates',
]

const specialtySheets = [
    'Duplex Steel S31803 / S32205 Sheets & Plates',
    'Super Duplex S32750 / S32760 Sheets & Plates',
    'Inconel / Incoloy Sheets & Plates',
    'Monel Alloy Sheets & Plates',
    'Nickel Alloy Sheets & Plates',
    'Hastelloy Sheets & Plates',
    'Alloy 20 Sheets & Plates',
    'Aluminium Alloy 5052 / 5083 / 5086 / 5454 / 6061 Sheets',
    'Copper Nickel 70/30 & 90/10 Sheets & Plates',
    'Alloy Steel P5 / P9 / P11 / P22 / P91 Sheets & Plates',
    'Carbon Steel — API / High Tensile / Mild Steel Sheets',
    'SMO 254 / Alloy 28 / 409L / 409M Sheets & Plates',
]

const specifications = [
    { label: 'Standard', value: 'ASTM A240 / ASME SA240 · JIS / AISI / DIN / EN' },
    { label: 'Width', value: '1000mm – 3500mm (standard & custom)' },
    { label: 'Length', value: '2000mm – 6000mm (standard & custom)' },
    { label: 'Thickness', value: '0.3 mm to 120 mm' },
    { label: 'Form', value: 'Coils, Foils, Rolls, Plain Sheet, Shim Sheet, Perforated, Chequered Plate, Strip, Flats, Circles, Ring / Flange' },
    { label: 'Surface Finish', value: 'HR, CR, 2B, 2D, BA, No.1, No.4, No.8, 8K Mirror, Chequered, Hair Line, Sand Blast, Brush, Etching, Satin' },
]

const info = products.find(p => p.slug === '/products/sheets-coils')!

export function SheetsCoilsPage() {
    return (
        <div className="page-stack">
            <Seo title={pageMeta.sheetsCoils.title} description={pageMeta.sheetsCoils.description} path={pageMeta.sheetsCoils.path} />
            <PageHero
                eyebrow="Plates & Sheets"
                title="Titanium and Stainless Steel Plates &amp; Sheets for Every Application."
                description="Manufacturer, exporter and supplier of a wide range of high-quality plates, sheets and coils — stainless steel, titanium, duplex, nickel, aluminium and more."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span>Plates &amp; Sheets</span>
                    </>
                }
            />

            <section className="container" style={{ marginTop: '4rem' }}>
                <article className="feature-split">
                    <div className="feature-split__media">
                        <img src="/assets/home/sheets-coils.webp" alt="Stainless Steel Sheets and Plates" loading="lazy" />
                    </div>
                    <div className="feature-split__content">
                        <h2>Stainless Steel Plates &amp; Sheets</h2>
                        <p>{info.description1}</p>
                        <ul className="feature-list">
                            {stainlessSteelSheetGrades.map((g) => (
                                <li key={g}><Link to={`/products/sheets-coils/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>

                <article className="feature-split" style={{ direction: 'rtl' }}>
                    <div className="feature-split__media" style={{ direction: 'ltr' }}>
                        <img src="/assets/home/product-5.webp" alt="Titanium Sheets and Plates" loading="lazy" />
                    </div>
                    <div className="feature-split__content" style={{ direction: 'ltr' }}>
                        <h2>Titanium Plates &amp; Sheets</h2>
                        <p>{info.description2}</p>
                        <ul className="feature-list">
                            {titaniumSheetGrades.map((g) => (
                                <li key={g}><Link to={`/products/sheets-coils/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>
            </section>

            <section className="container" style={{ marginTop: '1rem' }}>
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

            <section className="container" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>
                    Specialty Alloy Plates &amp; Sheets
                </h2>
                <ul className="feature-list" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
                    {specialtySheets.map((g) => (
                        <li key={g}><Link to={`/products/sheets-coils/${toSlug(g)}`}>{g}</Link></li>
                    ))}
                </ul>
            </section>

            <section className="product-spec-section">
                <div className="container">
                    <h2 className="product-spec-section__title">Technical Specifications</h2>
                    <div className="spec-table-wrap">
                        <table className="spec-table">
                            <tbody>
                                {specifications.map((row) => (
                                    <tr key={row.label}>
                                        <th>{row.label}</th>
                                        <td>{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="spec-note">
                        All plates and sheets are supplied with full Mill Test Certificates, Chemical &amp; Mechanical Reports,
                        and Third Party Inspection Reports on request.
                    </p>
                </div>
            </section>
        </div>
    )
}
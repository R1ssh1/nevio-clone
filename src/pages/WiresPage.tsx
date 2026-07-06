import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { toSlug } from '../data/slug'

const stainlessSteelWireGrades = [
    'SS 304 / 304L Wires',
    'SS 309 / 310 / 310S Wires',
    'SS 316 / 316L / 316Ti Wires',
    'SS 317 / 317L Wires',
    'SS 321 Wires',
    'SS 347 Wires',
    'SS 410 / 430 Wires',
    'SS 904L Wires',
]

const titaniumWireGrades = [
    'Titanium Grade 1 Wires',
    'Titanium Grade 2 Wires',
    'Titanium Grade 5 (Ti-6Al-4V) Wires',
    'Titanium ELI F136 Wires',
    'Titanium Grade 9 Wires',
]

const specialtyWires = [
    'Duplex Steel S31803 / S32205 Wires',
    'Super Duplex S32750 / S32760 Wires',
    'Inconel 600 / 625 / 718 Wires',
    'Incoloy 800 / 825 Wires',
    'Monel 400 / K500 Wires',
    'Nickel 200 / 201 Wires',
    'Hastelloy Wires',
    'Alloy 20 Wires',
    'Copper Nickel 70/30 & 90/10 Wires',
    'Alloy Steel Wires',
    'Carbon Steel Wires',
]

const specifications = [
    { label: 'Standard', value: 'ASTM / ASME · DIN / EN / JIS / ISO' },
    { label: 'Diameter Range', value: '0.1mm – 25mm' },
    { label: 'Form', value: 'Coil, Spool, Straight Lengths, Cut Pieces' },
    { label: 'Surface Condition', value: 'Bright Annealed, Pickled, Drawn, Lightly Oxidised' },
    { label: 'Temper', value: 'Soft, Half Hard, Full Hard, Spring Temper' },
    { label: 'Applications', value: 'Welding, Weaving, Surgical / Implant, Springs, Mesh, Rope, Cable' },
]

const info = products.find(p => p.slug === '/products/wires')!

export function WiresPage() {
    return (
        <div className="page-stack">
            <Seo title={pageMeta.wires.title} description={pageMeta.wires.description} path={pageMeta.wires.path} />
            <PageHero
                eyebrow="Wires"
                title="Titanium and Stainless Steel Wire Products."
                description="High-quality stainless steel, titanium, nickel alloy, and specialty wires for welding, medical, industrial, and structural applications."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span>Wires</span>
                    </>
                }
            />

            <section className="container" style={{ marginTop: '4rem' }}>
                <article className="feature-split">
                    <div className="feature-split__media">
                        <img src="/assets/home/wires.webp" alt="Stainless Steel Wires" loading="lazy" />
                    </div>
                    <div className="feature-split__content">
                        <h2>Stainless Steel Wires</h2>
                        <p>{info.description1}</p>
                        <ul className="feature-list">
                            {stainlessSteelWireGrades.map((g) => (
                                <li key={g}><Link to={`/products/wires/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>

                <article className="feature-split" style={{ direction: 'rtl' }}>
                    <div className="feature-split__media" style={{ direction: 'ltr' }}>
                        <img src="/assets/home/product-1.webp" alt="Titanium Wires" loading="lazy" />
                    </div>
                    <div className="feature-split__content" style={{ direction: 'ltr' }}>
                        <h2>Titanium Wires</h2>
                        <p>{info.description2}</p>
                        <ul className="feature-list">
                            {titaniumWireGrades.map((g) => (
                                <li key={g}><Link to={`/products/wires/${toSlug(g)}`}>{g}</Link></li>
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

            {/* Specialty alloys */}
            <section className="container" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>
                    Specialty Alloy Wires
                </h2>
                <ul className="feature-list" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
                    {specialtyWires.map((g) => (
                        <li key={g}><Link to={`/products/wires/${toSlug(g)}`}>{g}</Link></li>
                    ))}
                </ul>
            </section>

            {/* Specifications */}
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
                        All wires are supplied with full Mill Test Certificates, Chemical &amp; Mechanical Reports,
                        and Third Party Inspection Reports on request.
                    </p>
                </div>
            </section>
        </div>
    )
}
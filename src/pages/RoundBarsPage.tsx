import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { toSlug } from '../data/slug'

const stainlessSteelBarGrades = [
    'SS 304 / 304L / 304H Round Bars',
    'SS 309 / 310 / 310S Round Bars',
    'SS 316 / 316L / 316Ti Round Bars',
    'SS 317 / 317L Round Bars',
    'SS 321 / 321H Round Bars',
    'SS 347 / 347H Round Bars',
    'SS 410 / 420 / 430 / 431 Round Bars',
    'SS 440A / 440B / 440C Round Bars',
    'SS 446 Round Bars',
    'SS 904L Round Bars',
    'SS 15-5 PH / 17-4 PH Round Bars',
]

const titaniumBarGrades = [
    'Titanium Grade 1 Round Bars',
    'Titanium Grade 2 Round Bars',
    'Titanium Grade 5 (Ti-6Al-4V) Round Bars',
    'Titanium Grade 9 Round Bars',
    'Titanium AMS 4911 Ti-6Al-4V Round Bars',
    'Titanium Grade 23 (Ti-6Al-4V ELI) Round Bars',
    'Titanium Grades 1, 4, 7, 9, 12 Round Bars',
]

const specialtyBars = [
    'Duplex Steel S31803 / S32205 Round Bars',
    'Super Duplex S32750 / S32760 Round Bars',
    'Inconel / Incoloy Round Bars',
    'Monel 400 / K500 Round Bars',
    'Nickel Alloy Round Bars',
    'Hastelloy Round Bars',
    'Alloy 20 Round Bars',
    'Alloy Steel F1 / F5 / F9 / F11 / F22 / F91 / F92 Round Bars',
    'Brass Round Bars',
    'Tantalum Round Bars',
    'Copper Nickel 70/30 & 90/10 Round Bars',
    'Beryllium Copper Round Bars',
    'Carbon Steel A36 / S355J2+N / ST52 / EN353 Round Bars',
    'High Tensile Steel Round Bars',
    'SS 316LVM (Vacuum Melted) Round Bars',
]

const specifications = [
    { label: 'Standard', value: 'ASTM A276 / A479 · ASME SA276 / SA479 · EN / DIN / JIS / BS' },
    { label: 'Diameter Range', value: '14mm – 300mm' },
    { label: 'Length', value: '1m – 6m · Custom Cut Lengths available' },
    { label: 'Form', value: 'Round, Square, Hex (A/F), Rectangle, Billet, Ingot, Forging' },
    { label: 'Finish', value: 'Hot Rolled, Cold Drawn, Peeled, Polished, Centreless Ground' },
]

const info = products.find(p => p.slug === '/products/round-bars')!

export function RoundBarsPage() {
    return (
        <div className="page-stack">
            <Seo title={pageMeta.roundBars.title} description={pageMeta.roundBars.description} path={pageMeta.roundBars.path} />
            <PageHero
                eyebrow="Round Bars"
                title="Titanium and Stainless Steel Round Bars &amp; Rods."
                description="Renowned supplier of a wide range of round bars, rods, and other bar forms in stainless steel, titanium, duplex, nickel alloys, and more."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span>Round Bars</span>
                    </>
                }
            />

            <section className="container" style={{ marginTop: '4rem' }}>
                <article className="feature-split">
                    <div className="feature-split__media">
                        <img src="/assets/home/round-bars.webp" alt="Stainless Steel Round Bars" loading="lazy" />
                    </div>
                    <div className="feature-split__content">
                        <h2>Stainless Steel Round Bars</h2>
                        <p>{info.description1}</p>
                        <ul className="feature-list">
                            {stainlessSteelBarGrades.map((g) => (
                                <li key={g}><Link to={`/products/round-bars/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>

                <article className="feature-split" style={{ direction: 'rtl' }}>
                    <div className="feature-split__media" style={{ direction: 'ltr' }}>
                        <img src="/assets/home/product-3.webp" alt="Titanium Round Bars" loading="lazy" />
                    </div>
                    <div className="feature-split__content" style={{ direction: 'ltr' }}>
                        <h2>Titanium Round Bars</h2>
                        <p>{info.description2}</p>
                        <ul className="feature-list">
                            {titaniumBarGrades.map((g) => (
                                <li key={g}><Link to={`/products/round-bars/${toSlug(g)}`}>{g}</Link></li>
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
                    Specialty Alloy Round Bars
                </h2>
                <ul className="feature-list" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
                    {specialtyBars.map((g) => (
                        <li key={g}><Link to={`/products/round-bars/${toSlug(g)}`}>{g}</Link></li>
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
                        All round bars are supplied with full Mill Test Certificates, Chemical &amp; Mechanical Reports,
                        PMI Test, and Third Party Inspection Reports on request.
                    </p>
                </div>
            </section>
        </div>
    )
}
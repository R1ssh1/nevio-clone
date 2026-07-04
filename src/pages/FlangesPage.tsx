import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'
import { toSlug } from '../data/slug'

const stainlessSteelFlangeGrades = [
    'SS 304 / 304L Flanges',
    'SS 309 / 310 / 310S Flanges',
    'SS 316 / 316L / 316Ti Flanges',
    'SS 317 / 317L Flanges',
    'SS 321 / 321H Flanges',
    'SS 347 / 347H Flanges',
    'SS 410 / 430 Flanges',
    'SS 904L Flanges',
]

const titaniumFlangeGrades = [
    'Titanium Grade 1 Flanges',
    'Titanium Grade 2 Flanges',
    'Titanium Grade 5 (Ti-6Al-4V) Flanges',
    'Titanium Grade 9 Flanges',
]

const specialtyFlanges = [
    'Duplex Steel S31803 / S32205 Flanges',
    'Super Duplex S32750 / S32760 Flanges',
    'Inconel 600 / 625 / 718 Flanges',
    'Incoloy 800 / 825 Flanges',
    'Monel 400 / K500 Flanges',
    'Nickel 200 / 201 Flanges',
    'Hastelloy Flanges',
    'Alloy 20 Flanges',
    'Copper Nickel 70/30 & 90/10 Flanges',
    'Alloy Steel Flanges',
    'Carbon Steel Flanges',
]

const specifications = [
    { label: 'Standard', value: 'ASTM / ASME · DIN / EN / JIS / ISO' },
    { label: 'Size', value: '1/2" (15 NB) to 48" (1200NB)' },
    { label: 'Class', value: '150 LBS, 300 LBS, 600 LBS, 900 LBS, 1500 LBS, 2500 LBS, DIN Standard ND-6,10, 16, 25, 40 Etc.' },
    { label: 'Types', value: 'Slip On, Weld Neck, Blind, Socket Weld, Lap Joint, Spectacle, Ring Joint, Orifice, Long Weld Neck, Deck Flange, etc.' },
    { label: 'Face Type', value: 'Flat Face (FF), Raised Face (RF), Ring Type Joint (RTJ)' },
]

export function FlangesPage() {
    return (
        <div className="page-stack">
            <Seo title={pageMeta.flanges.title} description={pageMeta.flanges.description} path={pageMeta.flanges.path} />
            <PageHero
                eyebrow="Flanges"
                title="Industrial Flanges in Stainless Steel & Titanium."
                description="High-quality stainless steel, titanium, nickel alloy, and specialty flanges for pipeline and industrial applications."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span>Flanges</span>
                    </>
                }
            />

            <section className="container" style={{ marginTop: '4rem' }}>
                <article className="feature-split">
                    <div className="feature-split__media">
                        <img src="/assets/home/product-6.webp" alt="Stainless Steel Flanges" loading="lazy" />
                    </div>
                    <div className="feature-split__content">
                        <h2>Stainless Steel Flanges</h2>
                        <p>
                            We supply a comprehensive range of stainless steel flanges suitable for various pipeline and industrial applications. 
                            Our flanges are manufactured under strict quality control and conform to national and international standards.
                        </p>
                        <ul className="feature-list">
                            {stainlessSteelFlangeGrades.map((g) => (
                                <li key={g}><Link to={`/products/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>

                <article className="feature-split" style={{ direction: 'rtl' }}>
                    <div className="feature-split__media" style={{ direction: 'ltr' }}>
                        <img src="/assets/home/product-6.webp" alt="Titanium Flanges" loading="lazy" />
                    </div>
                    <div className="feature-split__content" style={{ direction: 'ltr' }}>
                        <h2>Titanium Flanges</h2>
                        <p>
                            Titanium flanges from our inventory are manufactured to exacting standards and are widely used in
                            marine engineering, chemical processing, and desalination plants. Offered in multiple grades.
                        </p>
                        <ul className="feature-list">
                            {titaniumFlangeGrades.map((g) => (
                                <li key={g}><Link to={`/products/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>
            </section>

            {/* Specialty alloys */}
            <section className="container" style={{ marginTop: '1rem', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>
                    Specialty Alloy Flanges
                </h2>
                <ul className="feature-list" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
                    {specialtyFlanges.map((g) => (
                        <li key={g}><Link to={`/products/${toSlug(g)}`}>{g}</Link></li>
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
                        All flanges are supplied with full Mill Test Certificates, Chemical &amp; Mechanical Reports,
                        and Third Party Inspection Reports on request.
                    </p>
                </div>
            </section>
        </div>
    )
}

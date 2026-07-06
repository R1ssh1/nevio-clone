import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { toSlug } from '../data/slug'

const stainlessSteelForgedGrades = [
    'SS 304 / 304L Forged Fittings',
    'SS 316 / 316L / 316Ti Forged Fittings',
    'SS 317 / 317L Forged Fittings',
    'SS 321 / 321H Forged Fittings',
    'SS 347 / 347H Forged Fittings',
    'SS 904L Forged Fittings',
]

const titaniumForgedGrades = [
    'Titanium Grade 1 Forged Fittings',
    'Titanium Grade 2 Forged Fittings',
    'Titanium Grade 5 (Ti-6Al-4V) Forged Fittings',
]

const specialtyForged = [
    'Duplex Steel S31803 / S32205 Forged Fittings',
    'Super Duplex S32750 / S32760 Forged Fittings',
    'Inconel 600 / 625 / 718 Forged Fittings',
    'Incoloy 800 / 825 Forged Fittings',
    'Monel 400 / K500 Forged Fittings',
    'Hastelloy Forged Fittings',
    'Alloy 20 Forged Fittings',
    'Alloy Steel Forged Fittings',
    'Carbon Steel Forged Fittings',
]

const specifications = [
    { label: 'Standard', value: 'ASTM / ASME A182 / SA182' },
    { label: 'Size', value: '1/8" NB to 4" NB (Socketweld & Screwed-Threaded)' },
    { label: 'Class', value: '2000 LBS, 3000 LBS, 6000 LBS, 9000 LBS' },
    { label: 'Types', value: 'Elbow, Tee, Union, Cross, Coupling, Cap, Bushing, Plug, Swage Nipple, Welding Boss, Hexagon Nipple, Barrel Nipple, Welding Nipple, Street Elbow, Hexagon Nut, Hose Nipple, Bend, Adapter, Weldolet, Elbowlet, Sockolet, Thredolet, Nipolet, Letrolet, etc.' },
]

const info = products.find(p => p.slug === '/products/forged-fittings')!

export function ForgedFittingsPage() {
    return (
        <div className="page-stack">
            <Seo title={pageMeta.forgedFittings.title} description={pageMeta.forgedFittings.description} path={pageMeta.forgedFittings.path} />
            <PageHero
                eyebrow="Forged Fittings"
                title="High-Pressure Forged Fittings."
                description="Premium quality forged fittings in stainless steel, titanium, and nickel alloys for high-pressure applications."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span>Forged Fittings</span>
                    </>
                }
            />

            <section className="container" style={{ marginTop: '4rem' }}>
                <article className="feature-split">
                    <div className="feature-split__media">
                        <img src="/assets/home/titanium-pipes-tubes.webp" alt="Stainless Steel Forged Fittings" loading="lazy" />
                    </div>
                    <div className="feature-split__content">
                        <h2>Stainless Steel Forged Fittings</h2>
                        <p>{info.description1}</p>
                        <ul className="feature-list">
                            {stainlessSteelForgedGrades.map((g) => (
                                <li key={g}><Link to={`/products/forged-fittings/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>

                <article className="feature-split" style={{ direction: 'rtl' }}>
                    <div className="feature-split__media" style={{ direction: 'ltr' }}>
                        <img src="/assets/home/product-4.webp" alt="Titanium Forged Fittings" loading="lazy" />
                    </div>
                    <div className="feature-split__content" style={{ direction: 'ltr' }}>
                        <h2>Titanium Forged Fittings</h2>
                        <p>{info.description2}</p>
                        <ul className="feature-list">
                            {titaniumForgedGrades.map((g) => (
                                <li key={g}><Link to={`/products/forged-fittings/${toSlug(g)}`}>{g}</Link></li>
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
                    Specialty Alloy Forged Fittings
                </h2>
                <ul className="feature-list" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
                    {specialtyForged.map((g) => (
                        <li key={g}><Link to={`/products/forged-fittings/${toSlug(g)}`}>{g}</Link></li>
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
                        All forged fittings are supplied with full Mill Test Certificates, Chemical &amp; Mechanical Reports,
                        dimensional inspection reports, and Third Party Inspection Reports on request.
                    </p>
                </div>
            </section>
        </div>
    )
}

import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'
import { toSlug } from '../data/slug'

const stainlessSteelFastenersGrades = [
    'SS 304 / 304L Fasteners',
    'SS 316 / 316L Fasteners',
    'SS 310 / 310S Fasteners',
    'SS 317 / 317L Fasteners',
    'SS 321 / 347 Fasteners',
    'SS 410 / 430 Fasteners',
    'SS 904L Fasteners',
]

const titaniumFastenersGrades = [
    'Titanium Grade 1 Fasteners',
    'Titanium Grade 2 Fasteners',
    'Titanium Grade 5 (Ti-6Al-4V) Fasteners',
]

const specialtyFasteners = [
    'Duplex Steel S31803 / S32205 Fasteners',
    'Super Duplex S32750 / S32760 Fasteners',
    'Inconel 600 / 625 / 718 Fasteners',
    'Incoloy 800 / 825 Fasteners',
    'Monel 400 / K500 Fasteners',
    'Hastelloy Fasteners',
    'Alloy 20 Fasteners',
    'Alloy Steel Fasteners',
    'Carbon Steel Fasteners',
]

const specifications = [
    { label: 'Standard', value: 'DIN, ASTM, BS and all International Standards' },
    { label: 'Length', value: '3 mm to 200 mm' },
    { label: 'Size', value: 'M3 - M56 | 3/6" to 2" | Custom Sizes' },
    { label: 'Types', value: 'Bolts, Nuts, Washers, Screws, Studs, Threaded Rods, etc.' },
]

export function FastenersPage() {
    return (
        <div className="page-stack">
            <Seo title={pageMeta.fasteners.title} description={pageMeta.fasteners.description} path={pageMeta.fasteners.path} />
            <PageHero
                eyebrow="Fasteners"
                title="Industrial Fasteners in Stainless Steel & Titanium."
                description="High-quality stainless steel, titanium, nickel alloy, and specialty fasteners for pipeline and industrial applications."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span>Fasteners</span>
                    </>
                }
            />

            <section className="container" style={{ marginTop: '4rem' }}>
                <article className="feature-split">
                    <div className="feature-split__media">
                        <img src="/assets/home/product-7.webp" alt="Stainless Steel Fasteners" loading="lazy" />
                    </div>
                    <div className="feature-split__content">
                        <h2>Stainless Steel Fasteners</h2>
                        <p>
                            We supply a comprehensive range of stainless steel fasteners suitable for various pipeline and industrial applications. 
                            Our fasteners are manufactured under strict quality control and conform to national and international standards.
                        </p>
                        <ul className="feature-list">
                            {stainlessSteelFastenersGrades.map((g) => (
                                <li key={g}><Link to={`/products/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>

                <article className="feature-split" style={{ direction: 'rtl' }}>
                    <div className="feature-split__media" style={{ direction: 'ltr' }}>
                        <img src="/assets/home/product-7.webp" alt="Titanium Fasteners" loading="lazy" />
                    </div>
                    <div className="feature-split__content" style={{ direction: 'ltr' }}>
                        <h2>Titanium Fasteners</h2>
                        <p>
                            Titanium fasteners from our inventory are manufactured to exacting standards and are widely used in
                            marine engineering, chemical processing, and desalination plants. Offered in multiple grades.
                        </p>
                        <ul className="feature-list">
                            {titaniumFastenersGrades.map((g) => (
                                <li key={g}><Link to={`/products/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>
            </section>

            {/* Specialty alloys */}
            <section className="container" style={{ marginTop: '1rem', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>
                    Specialty Alloy Fasteners
                </h2>
                <ul className="feature-list" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
                    {specialtyFasteners.map((g) => (
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
                </div>
            </section>
        </div>
    )
}

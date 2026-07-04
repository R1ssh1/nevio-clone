import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'
import { toSlug } from '../data/slug'

const stainlessSteelButtweldGrades = [
    'SS 304 / 304L Buttweld Fittings',
    'SS 309 / 310 / 310S Buttweld Fittings',
    'SS 316 / 316L / 316Ti Buttweld Fittings',
    'SS 317 / 317L Buttweld Fittings',
    'SS 321 / 321H Buttweld Fittings',
    'SS 347 / 347H Buttweld Fittings',
    'SS 904L Buttweld Fittings',
]

const titaniumButtweldGrades = [
    'Titanium Grade 1 Buttweld Fittings',
    'Titanium Grade 2 Buttweld Fittings',
    'Titanium Grade 5 (Ti-6Al-4V) Buttweld Fittings',
]

const specialtyButtweld = [
    'Duplex Steel S31803 / S32205 Buttweld Fittings',
    'Super Duplex S32750 / S32760 Buttweld Fittings',
    'Inconel 600 / 625 / 718 Buttweld Fittings',
    'Incoloy 800 / 825 Buttweld Fittings',
    'Monel 400 / K500 Buttweld Fittings',
    'Nickel 200 / 201 Buttweld Fittings',
    'Hastelloy Buttweld Fittings',
    'Alloy 20 Buttweld Fittings',
    'Alloy Steel Buttweld Fittings',
    'Carbon Steel Buttweld Fittings',
]

const specifications = [
    { label: 'Standard', value: 'ASTM A403 / ASME SA403' },
    { label: 'Size', value: '1/8" NB to 48" NB (Seamless & Welded)' },
    { label: 'Thickness', value: 'Sch 5s, Sch 10s, Sch 40s, Sch 80s, Sch 160s, Sch XXS' },
    { label: 'Types', value: 'Elbow (45 deg, 90 deg, 180 deg), Tee, Cross, Reducer (Concentric, Eccentric), Stubend, Cap, Nipple etc.' },
]

export function ButtweldFittingsPage() {
    return (
        <div className="page-stack">
            <Seo title={pageMeta.buttweldFittings.title} description={pageMeta.buttweldFittings.description} path={pageMeta.buttweldFittings.path} />
            <PageHero
                eyebrow="Buttweld Fittings"
                title="Industrial Buttweld Fittings."
                description="High-quality stainless steel, titanium, nickel alloy, and specialty buttweld fittings for pipeline and industrial applications."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span>Buttweld Fittings</span>
                    </>
                }
            />

            <section className="container" style={{ marginTop: '4rem' }}>
                <article className="feature-split">
                    <div className="feature-split__media">
                        <img src="/assets/home/stainless-steel-304-pipes-tubes.webp" alt="Stainless Steel Buttweld Fittings" loading="lazy" />
                    </div>
                    <div className="feature-split__content">
                        <h2>Stainless Steel Buttweld Fittings</h2>
                        <p>
                            We supply a comprehensive range of stainless steel buttweld fittings suitable for various pipeline and industrial applications. 
                            Our fittings are manufactured under strict quality control and conform to national and international standards.
                        </p>
                        <ul className="feature-list">
                            {stainlessSteelButtweldGrades.map((g) => (
                                <li key={g}><Link to={`/products/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>

                <article className="feature-split" style={{ direction: 'rtl' }}>
                    <div className="feature-split__media" style={{ direction: 'ltr' }}>
                        <img src="/assets/home/stainless-steel-304-pipes-tubes.webp" alt="Titanium Buttweld Fittings" loading="lazy" />
                    </div>
                    <div className="feature-split__content" style={{ direction: 'ltr' }}>
                        <h2>Titanium Buttweld Fittings</h2>
                        <p>
                            Titanium buttweld fittings from our inventory are manufactured to exacting standards and are widely used in
                            marine engineering, chemical processing, and desalination plants. Offered in multiple grades.
                        </p>
                        <ul className="feature-list">
                            {titaniumButtweldGrades.map((g) => (
                                <li key={g}><Link to={`/products/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>
            </section>

            {/* Specialty alloys */}
            <section className="container" style={{ marginTop: '1rem', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>
                    Specialty Alloy Buttweld Fittings
                </h2>
                <ul className="feature-list" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
                    {specialtyButtweld.map((g) => (
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

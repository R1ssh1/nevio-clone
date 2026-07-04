import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'
import { toSlug } from '../data/slug'

const stainlessSteelHollowGrades = [
    'SS 304 / 304L Hollow Sections',
    'SS 316 / 316L Hollow Sections',
    'SS 310 / 310S Hollow Sections',
    'SS 317 / 317L Hollow Sections',
    'SS 321 / 347 Hollow Sections',
    'SS 410 / 430 Hollow Sections',
    'SS 904L Hollow Sections',
]

const specialtyHollow = [
    'Duplex Steel S31803 / S32205 Hollow Sections',
    'Super Duplex S32750 / S32760 Hollow Sections',
    'Alloy Steel Hollow Sections',
    'Carbon Steel Hollow Sections',
]

const specifications = [
    { label: 'Standard', value: 'ASTM A500, ASTM A554' },
    { label: 'Square Hollow Section Size', value: '10mm x 10mm to 250mm x 250mm' },
    { label: 'Rectangular Hollow Section Size', value: '10mm x 20mm to 150mm x 300mm' },
    { label: 'Thickness', value: '0.5mm to 20mm' },
    { label: 'Length', value: 'Single Random, Double Random & Cut-to-Length' },
]

export function HollowSectionsPage() {
    return (
        <div className="page-stack">
            <Seo title={pageMeta.hollowSections.title} description={pageMeta.hollowSections.description} path={pageMeta.hollowSections.path} />
            <PageHero
                eyebrow="Hollow Sections"
                title="Square & Rectangular Hollow Sections."
                description="High-quality stainless steel and specialty alloy hollow sections for structural and architectural applications."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span>Hollow Sections</span>
                    </>
                }
            />

            <section className="container" style={{ marginTop: '4rem' }}>
                <article className="feature-split">
                    <div className="feature-split__media">
                        <img src="/assets/home/360_F_316400601_R5tlkEOW3sds6fnD2ZIwyPXaRQDSK5rb.jpg" alt="Stainless Steel Hollow Sections" loading="lazy" />
                    </div>
                    <div className="feature-split__content">
                        <h2>Stainless Steel Hollow Sections</h2>
                        <p>
                            We supply a comprehensive range of stainless steel square and rectangular hollow sections suitable for structural, engineering, and architectural applications. 
                            Our hollow sections are manufactured under strict quality control and conform to national and international standards.
                        </p>
                        <ul className="feature-list">
                            {stainlessSteelHollowGrades.map((g) => (
                                <li key={g}><Link to={`/products/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>
            </section>

            {/* Specialty alloys */}
            <section className="container" style={{ marginTop: '1rem', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>
                    Specialty Alloy Hollow Sections
                </h2>
                <ul className="feature-list" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
                    {specialtyHollow.map((g) => (
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

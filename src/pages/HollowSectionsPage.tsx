import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
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

const info = products.find(p => p.slug === '/products/hollow-sections')!

export function HollowSectionsPage() {
    return (
        <div className="page-stack">
            <Seo title={pageMeta.hollowSections.title} description={pageMeta.hollowSections.description} path={pageMeta.hollowSections.path} />
            <PageHero
                eyebrow="Hollow Sections"
                title="Square &amp; Rectangular Hollow Sections."
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
                        <p>{info.description1}</p>
                        <ul className="feature-list">
                            {stainlessSteelHollowGrades.map((g) => (
                                <li key={g}><Link to={`/products/hollow-sections/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>

                <article className="feature-split" style={{ direction: 'rtl' }}>
                    <div className="feature-split__media" style={{ direction: 'ltr' }}>
                        <img src="/assets/home/product-6.webp" alt="Titanium Hollow Sections" loading="lazy" />
                    </div>
                    <div className="feature-split__content" style={{ direction: 'ltr' }}>
                        <h2>Specialty Hollow Sections</h2>
                        <p>{info.description2}</p>
                        <ul className="feature-list">
                            {specialtyHollow.map((g) => (
                                <li key={g}><Link to={`/products/hollow-sections/${toSlug(g)}`}>{g}</Link></li>
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

            {/* Specifications */}
            <section className="product-spec-section" style={{ marginTop: '4rem' }}>
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

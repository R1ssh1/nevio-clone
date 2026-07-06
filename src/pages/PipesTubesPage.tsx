import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { toSlug } from '../data/slug'

const stainlessSteelPipeGrades = [
    'SS 304 / 304L / 304H Pipes & Tubes',
    'SS 309 / 310 / 310S Pipes & Tubes',
    'SS 316 / 316L / 316Ti Pipes & Tubes',
    'SS 317 / 317L Pipes & Tubes',
    'SS 321 / 321H Pipes & Tubes',
    'SS 347 / 347H Pipes & Tubes',
    'SS 410 Pipes & Tubes',
    'SS 446 Pipes & Tubes',
    'SS 904L Pipes & Tubes',
]

const titaniumPipeGrades = [
    'Titanium Grade 1 Pipes & Tubes',
    'Titanium Grade 2 Pipes & Tubes',
    'Titanium Grade 5 (Ti-6Al-4V) Pipes & Tubes',
    'Titanium Grade 9 Pipes & Tubes',
]

const specialtyPipes = [
    'Duplex Steel S31803 / S32205 Pipes & Tubes',
    'Super Duplex S32750 / S32760 Pipes & Tubes',
    'Inconel 600 / 601 / 625 / 718 Pipes & Tubes',
    'Incoloy 800 / 800HT / 825 Pipes & Tubes',
    'Monel 400 / K500 Pipes & Tubes',
    'Nickel 200 / 201 Pipes & Tubes',
    'Hastelloy Pipes & Tubes',
    'Alloy 20 Pipes & Tubes',
    'Copper Nickel 70/30 & 90/10 Pipes & Tubes',
    'Aluminium Alloy Pipes & Tubes',
    'Alloy Steel P5 / P9 / P11 / P22 / P91 / P92 Pipes & Tubes',
    'Carbon Steel Seamless & ERW Pipes',
    'API 5L Line Pipes',
    'SMO 254 / Alloy 28 / 253 MA Pipes & Tubes',
]

const specifications = [
    { label: 'Pipe Standard', value: 'ASTM A312 / A358 · ASME SA312 / SA358' },
    { label: 'Tube Standard', value: 'ASTM A213 / A269 / A249 / A511 / A554' },
    { label: 'Pipe Size', value: '1/8″ NB to 24″ NB · 1/4″ OD to 24″ OD' },
    { label: 'Tube Size', value: '1/2″ OD to 8″ OD' },
    { label: 'Thickness / Schedule', value: '0.3mm – 50mm · SCH 5 to SCH XXS' },
    { label: 'Type', value: 'Seamless / ERW / Welded / Fabricated' },
    { label: 'Form', value: 'Round, Square, Rectangular, Oval, Hydraulic' },
    { label: 'Length', value: 'Single Random, Double Random & Cut-to-Length' },
    { label: 'End Finish', value: 'Plain End, Beveled End, Threaded' },
    { label: 'Surface Finish', value: '2B, No.4, No.1, No.8 Mirror, Custom Finish' },
    { label: 'Delivery Condition', value: 'Annealed & Pickled, Polished, Bright Annealed, Cold Drawn' },
]

const info = products.find(p => p.slug === '/products/pipes-tubes')!

export function PipesTubesPage() {
    return (
        <div className="page-stack">
            <Seo
                title={pageMeta.pipesTubes.title}
                description={pageMeta.pipesTubes.description}
                path={pageMeta.pipesTubes.path}
            />
            <PageHero
                eyebrow="Pipes & Tubes"
                title="Titanium and Stainless Steel Pipes & Tubes for Critical Applications."
                description="Specialist & India's largest supplier and exporter of high-grade pipes and tubes — stainless steel, titanium, duplex, nickel alloys and more."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span>Pipes &amp; Tubes</span>
                    </>
                }
            />

            {/* ── Stainless Steel Pipes: image left ── */}
            <section className="container" style={{ marginTop: '4rem' }}>
                <article className="feature-split">
                    <div className="feature-split__media">
                        <img src="/assets/home/pipes-tubes.webp" alt="Stainless Steel Pipes and Tubes bundle" loading="lazy" />
                    </div>
                    <div className="feature-split__content">
                        <h2>Stainless Steel Pipes &amp; Tubes</h2>
                        <p>{info.description1}</p>
                        <ul className="feature-list">
                            {stainlessSteelPipeGrades.map((g) => (
                                <li key={g}><Link to={`/products/pipes-tubes/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>

                {/* ── Applications & Quality ── */}
                <article className="feature-split" style={{ direction: 'rtl' }}>
                    <div className="feature-split__media" style={{ direction: 'ltr' }}>
                        <img src="/assets/home/titanium-pipes-tubes.webp" alt="Titanium Pipes and Tubes rack" loading="lazy" />
                    </div>
                    <div className="feature-split__content" style={{ direction: 'ltr' }}>
                        <h2>Titanium Pipes &amp; Tubes</h2>
                        <p>{info.description2}</p>
                        <ul className="feature-list">
                            {titaniumPipeGrades.map((g) => (
                                <li key={g}><Link to={`/products/pipes-tubes/${toSlug(g)}`}>{g}</Link></li>
                            ))}
                        </ul>
                    </div>
                </article>
            </section>

            {/* ── Manufacturing Capability ── */}
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

            {/* ── Specialty alloys ── */}
            <section className="container" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>
                    Specialty Alloy Pipes &amp; Tubes
                </h2>
                <ul className="feature-list" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
                    {specialtyPipes.map((g) => (
                        <li key={g}><Link to={`/products/pipes-tubes/${toSlug(g)}`}>{g}</Link></li>
                    ))}
                </ul>
            </section>

            {/* Specifications table */}
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
                        Test certificates including Mill Test Certificates (EN 10204 3.1), Chemical &amp; Mechanical Reports,
                        PMI Test, NABL Lab Reports, and Third Party Inspection Reports are provided with every order.
                    </p>
                </div>
            </section>
        </div>
    )
}
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { TransparencySection } from '../components/TransparencySection'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'

/* ── Intersection Observer hook for scroll-reveal ── */
function useReveal<T extends HTMLElement = HTMLDivElement>() {
    const ref = useRef<T>(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('qp-visible')
                    obs.unobserve(el)
                }
            },
            { threshold: 0.12 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [])
    return ref
}

/* ── Reusable reveal wrapper ── */
function Reveal({ children, className = '', delay = 0 }: {
    children: React.ReactNode
    className?: string
    delay?: number
}) {
    const ref = useReveal<HTMLDivElement>()
    return (
        <div
            ref={ref}
            className={`qp-reveal ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}

/* ── SVG Icons ── */
const SvgPMI = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
    </svg>
)
const SvgUT = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M2 12h2M6 8v8M10 5v14M14 8v8M18 10v4M22 12h-2" />
    </svg>
)
const SvgHydro = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M12 2C6 9 4 13 4 16a8 8 0 0016 0c0-3-2-7-8-14z" />
        <path d="M8 18a4 4 0 008 0" />
    </svg>
)
const SvgRT = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M5 3l14 18" />
        <path d="M19 3L5 21" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="12" r="6" strokeDasharray="2 3" />
    </svg>
)
const SvgCorrosion = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
        <path d="M12 8v8M9 11h6" />
    </svg>
)
const SvgHardness = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
    </svg>
)
const SvgTensile = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M12 5v14M5 12l7-7 7 7M5 12l7 7 7-7" />
    </svg>
)
const SvgSpectro = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M3 20h18M8 20V8l4-5 4 5v12" />
        <path d="M10 12h4M10 16h4" />
    </svg>
)
const SvgFactory = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M2 20V9l6-4v4l6-4v4l5-3v14H2z" />
        <path d="M7 20v-4h3v4M14 20v-4h3v4" />
    </svg>
)
const SvgGlobe = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
    </svg>
)

/* ── Data ── */
const testingItems = [
    { icon: <SvgPMI />, label: 'Positive Material Identification', abbr: 'PMI' },
    { icon: <SvgUT />, label: 'Ultrasonic Testing', abbr: 'UT' },
    { icon: <SvgHydro />, label: 'Hydrostatic Testing', abbr: 'HT' },
    { icon: <SvgRT />, label: 'Radiography Testing', abbr: 'RT' },
    { icon: <SvgCorrosion />, label: 'Pitting Corrosion Test', abbr: 'PCT' },
    { icon: <SvgHardness />, label: 'Hardness Testing', abbr: 'HT' },
    { icon: <SvgTensile />, label: 'Tensile & Yield Testing', abbr: 'TYT' },
    { icon: <SvgSpectro />, label: 'Chemical Analysis (Spectro)', abbr: 'CA' },
]

const tpiCards = [
    {
        abbr: 'DNV',
        name: 'Det Norske Veritas',
        country: 'Norway',
        desc: 'International classification society providing risk management & quality assurance services worldwide.',
    },
    {
        abbr: 'BV',
        name: 'Bureau Veritas',
        country: 'France',
        desc: 'International inspection, testing & certification organisation with 200+ years of expertise.',
    },
    {
        abbr: 'NPCIL',
        name: 'Nuclear Power Corp. of India',
        country: 'India',
        desc: 'Government of India enterprise responsible for design, construction & operation of nuclear power.',
    },
    {
        abbr: 'TÜV',
        name: 'TÜV India',
        country: 'Germany / India',
        desc: 'Global testing, inspection & certification authority trusted across 140+ countries.',
    },
    {
        abbr: 'PDIL',
        name: 'PDIL',
        country: 'India',
        desc: 'Projects & Development India Ltd — premier engineering consultancy for fertiliser & chemical plants.',
    },
    {
        abbr: 'LR',
        name: "Lloyd's Register",
        country: 'United Kingdom',
        desc: 'Technical assurance & safety services for aerospace, marine & industrial sectors.',
    },
    {
        abbr: 'SGS',
        name: 'SGS Group',
        country: 'Switzerland',
        desc: "World's leading inspection, verification, testing & certification company.",
    },
    {
        abbr: 'TATA',
        name: 'Tata Projects',
        country: 'India',
        desc: 'One of India\'s fastest growing infrastructure companies, executing complex industrial projects.',
    },
    {
        abbr: 'BHEL',
        name: 'Bharat Heavy Electricals',
        country: 'India',
        desc: 'India\'s largest power equipment manufacturer and a premier engineering enterprise.',
    },
    {
        abbr: 'L&T',
        name: 'Larsen & Toubro Ltd.',
        country: 'India',
        desc: 'India\'s leading technology, engineering, construction & manufacturing conglomerate.',
    },
    {
        abbr: 'HEG',
        name: 'HEG Ltd.',
        country: 'India',
        desc: 'One of the largest graphite electrode manufacturers globally, recognised for quality.',
    },
    {
        abbr: 'TÜV SÜD',
        name: 'TÜV SÜD',
        country: 'Germany',
        desc: 'International certification body providing technical safety & quality assurance services.',
    },
    {
        abbr: 'VELOSI',
        name: 'Velosi',
        country: 'Global',
        desc: 'International inspection, testing & expediting services for oil, gas & industrial sectors.',
    },
    {
        abbr: 'IQC',
        name: 'IQC',
        country: 'Global',
        desc: 'Independent quality & compliance inspections for manufacturing and industrial projects.',
    },
    {
        abbr: 'GL',
        name: 'Germanischer Lloyd',
        country: 'Germany',
        desc: 'Classification society providing technical rules & standards for marine & offshore industries.',
    },
    {
        abbr: 'BECHTEL',
        name: 'Bechtel',
        country: 'United States',
        desc: 'One of the world\'s largest engineering, construction & project management companies.',
    },
]

const objectives = [
    {
        number: '01',
        title: 'Deliver Excellence',
        body: 'High-value, reliable, and innovative solutions that not only meet but exceed customer expectations, ensuring long-term satisfaction and trust.',
    },
    {
        number: '02',
        title: 'Strategic Collaboration',
        body: 'Partner with a strong distribution network, bringing our products closer to end users with efficiency and consistency worldwide.',
    },
    {
        number: '03',
        title: 'Foster Responsibility',
        body: 'A culture where our team respects customer requirements, environmental obligations, and regulatory compliance at every stage.',
    },
]

const certifications = [
    { id: 'iso', badge: 'ISO\n9001:2015', label: 'Quality Management System', sub: 'Certified Company', color: '#00338e' },
    { id: 'ped', badge: 'PED\n97/23/EC', label: 'Pressure Equipment Directive', sub: 'Approved Manufacturer', color: '#c0392b' },
    { id: 'nabl', badge: 'NABL', label: 'National Accreditation Board', sub: 'Approved Lab Testing', color: '#27ae60' },
    { id: 'en', badge: 'EN\n10204\n3.1', label: 'Mill Test Certificates', sub: 'Full Material Traceability', color: '#8e44ad' },
]

const qualityPrinciples = [
    { text: 'Strict Quality Assurance Plan (QAP) from raw material to dispatch' },
    { text: 'NABL-approved laboratory testing – Destructive & Non-Destructive' },
    { text: 'Third Party Inspections accepted from leading global agencies' },
    { text: 'EN 10204 3.1 Mill Test Certificates provided with every delivery' },
]

export function QualityPage() {
    const introRef = useReveal<HTMLDivElement>()
    const testingRef = useReveal<HTMLDivElement>()
    const tpiRef = useReveal<HTMLDivElement>()
    const objRef = useReveal<HTMLDivElement>()
    const certRef = useReveal<HTMLDivElement>()

    return (
        <div className="page-stack quality-page">
            <Seo
                title={pageMeta.quality.title}
                description={pageMeta.quality.description}
                path={pageMeta.quality.path}
            />
            <PageHero
                eyebrow="Quality Policy"
                title="Quality Beyond Boundaries."
                description="At Nevio Steel India, we are dedicated to delivering world-class Titanium and Stainless Steel products, manufactured with precision and tested to the highest standards."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Quality Policy</span>
                    </>
                }
            />

            {/* ── 1. Quality Assurance Intro ── */}
            <section className="section-block qp-intro-section">
                <div className="container">
                    <div className="qp-intro-grid">
                        {/* Left: text */}
                        <div ref={introRef} className="qp-reveal qp-intro-copy">
                            <p className="eyebrow">ISO 9001:2015 Certified</p>
                            <h2>Our Commitment to <br /><span className="qp-accent">Uncompromising Quality</span></h2>
                            <p>
                                Our commitment to service delivery and product quality is in accordance with National and
                                International standards. At Vedantara Metal and Alloys Pvt Ltd, we take pride in being one
                                of the most reliable manufacturers, suppliers, and exporters of Titanium and Stainless Steel
                                in the global market.
                            </p>
                            <p>
                                We maintain a strict <strong>Quality Assurance Plan (QAP)</strong> that ensures every product
                                leaving our facility meets the exact specifications of our clients. Our quality control team
                                continuously monitors the manufacturing process from raw material procurement to final dispatch.
                            </p>
                            <ul className="qp-principle-list">
                                {qualityPrinciples.map((p, i) => (
                                    <li key={i}>
                                        <span className="qp-check">✓</span>
                                        {p.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: visual panel */}
                        <div className="qp-intro-visual">
                            <div className="qp-visual-card qp-visual-card--top">
                                <div className="qp-visual-icon"><SvgFactory /></div>
                                <div>
                                    <strong>In-House Testing</strong>
                                    <span>NABL Approved Lab</span>
                                </div>
                            </div>
                            <div className="qp-visual-bg">
                                <img
                                    src="/assets/home/product-7.webp"
                                    alt="Quality steel manufacturing"
                                    loading="lazy"
                                />
                                <div className="qp-visual-overlay" />
                                <div className="qp-visual-badge">
                                    <strong>15+</strong>
                                    <span>Years of Excellence</span>
                                </div>
                            </div>
                            <div className="qp-visual-card qp-visual-card--bottom">
                                <div className="qp-visual-icon"><SvgGlobe /></div>
                                <div>
                                    <strong>Global Reach</strong>
                                    <span>50+ Countries Served</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TransparencySection />

            {/* ── 2. Testing Facilities ── */}
            <section className="section-block qp-testing-section">
                <div className="container">
                    <div ref={testingRef} className="qp-reveal qp-testing-head">
                        <p className="eyebrow" style={{ justifyContent: 'center' }}>Advanced Infrastructure</p>
                        <h2 className="qp-section-title">Testing Facilities</h2>
                        <p className="qp-section-sub">
                            Our products undergo rigorous <strong>Destructive and Non-Destructive Testing (NDT)</strong> in
                            our NABL-approved laboratories, ensuring flawless performance in every application.
                        </p>
                    </div>

                    <div className="qp-testing-grid">
                        {testingItems.map((item, i) => (
                            <Reveal key={i} className="qp-test-card" delay={i * 60}>
                                <div className="qp-test-card__icon">{item.icon}</div>
                                <div className="qp-test-card__abbr">{item.abbr}</div>
                                <div className="qp-test-card__label">{item.label}</div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 3. Third Party Inspection ── */}
            <section className="section-block qp-tpi-section">
                <div className="container">
                    <div ref={tpiRef} className="qp-reveal qp-tpi-inner qp-tpi-inner--carousel">
                        <div className="qp-tpi-text">
                            <p className="eyebrow">Independent Verification</p>
                            <h2>Third Party Inspection</h2>
                            <p>
                                We regularly supply materials under <strong>Third Party Inspection (TPI)</strong> agencies.
                                We provide <strong>EN 10204 3.1</strong> Mill Test Certificates with all deliveries and
                                can arrange for 3.2 certification upon request.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── Auto-scrolling TPI Carousel ── */}
                <div className="qp-tpi-carousel-wrap">
                    <div className="qp-tpi-track">
                        {[...tpiCards, ...tpiCards].map((card, idx) => (
                            <div className="qp-tpi-card" key={`${card.name}-${idx}`}>
                                <div className="qp-tpi-card__front">
                                    <div className="qp-tpi-card__abbr">{card.abbr}</div>
                                    <div className="qp-tpi-card__name">{card.name}</div>
                                </div>
                                <div className="qp-tpi-card__back">
                                    <div className="qp-tpi-card__country">{card.country}</div>
                                    <div className="qp-tpi-card__desc">{card.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. Objectives ── */}
            <section className="section-block qp-obj-section">
                <div className="container">
                    <div ref={objRef} className="qp-reveal">
                        <div className="qp-obj-head">
                            <p className="eyebrow">Strategic Direction</p>
                            <h2 className="qp-section-title">Our Quality Objectives</h2>
                        </div>
                        <div className="qp-obj-grid">
                            {objectives.map((obj, i) => (
                                <Reveal key={i} className="qp-obj-card" delay={i * 100}>
                                    <span className="qp-obj-number">{obj.number}</span>
                                    <h3>{obj.title}</h3>
                                    <p>{obj.body}</p>
                                    <div className="qp-obj-bar" />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. Certifications ── */}
            <section className="qp-cert-section">
                <div className="qp-cert-bg-pattern" />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div ref={certRef} className="qp-reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <p className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.7)' }}>
                            Standards & Accreditations
                        </p>
                        <h2 style={{ color: '#fff', fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', fontWeight: 800, margin: '0.5rem 0 1rem' }}>
                            Our Certifications
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
                            Backed by internationally recognised certifications that validate our commitment to quality, safety, and regulatory compliance.
                        </p>
                    </div>

                    <div className="qp-cert-grid">
                        {certifications.map((cert, i) => (
                            <Reveal key={cert.id} className="qp-cert-card" delay={i * 80}>
                                <div className="qp-cert-badge" style={{ borderColor: cert.color }}>
                                    <span style={{ color: cert.color }}>{cert.badge.split('\n').map((line, j) => (
                                        <span key={j} style={{ display: 'block' }}>{line}</span>
                                    ))}</span>
                                </div>
                                <div className="qp-cert-info">
                                    <strong>{cert.label}</strong>
                                    <span>{cert.sub}</span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 6. CTA Band ── */}
            <section className="qp-cta-band">
                <div className="container qp-cta-inner">
                    <div className="qp-cta-text">
                        <h2>Ready to Experience Quality Assurance?</h2>
                        <p>Get in touch with our team to discuss your requirements and receive a tailored quote.</p>
                    </div>
                    <Link to="/contact-us" className="primary-button qp-cta-btn">Request a Quote</Link>
                </div>
            </section>
        </div>
    )
}
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'

export function QualityPage() {
    return (
        <div className="page-stack">
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

            <section className="section-block container">
                <div style={{ maxWidth: '960px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--muted)' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        With the rising global demand for Titanium, known for its superior corrosion resistance, lightweight strength, and low maintenance, and the enduring popularity of Stainless Steel for its versatility, durability, and cost-effectiveness, we ensure that our products consistently meet the evolving needs of industries worldwide.
                    </p>
                    <p style={{ marginBottom: '3.5rem' }}>
                        By combining advanced technology, strict quality control, and a customer-first approach, we aim to provide reliable, sustainable, and high-performance solutions that build trust and add value across construction, infrastructure, aerospace, medical, and household applications.
                    </p>

                    <h3 style={{ color: 'var(--ink)', marginBottom: '2rem', fontSize: '2rem', textAlign: 'center' }}>Our Objectives</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
                        <li style={{ padding: '2rem', background: '#fff', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)', borderTop: '4px solid var(--orange)' }}>
                            <strong style={{ display: 'block', color: 'var(--navy)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>To deliver</strong>
                            high-value, reliable, and innovative solutions that not only meet but exceed customer expectations, ensuring long-term satisfaction and trust.
                        </li>
                        <li style={{ padding: '2rem', background: '#fff', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)', borderTop: '4px solid var(--orange)' }}>
                            <strong style={{ display: 'block', color: 'var(--navy)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>To collaborate</strong>
                            with strategic partners and a strong distribution network, bringing our products closer to end users with efficiency and consistency.
                        </li>
                        <li style={{ padding: '2rem', background: '#fff', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)', borderTop: '4px solid var(--orange)' }}>
                            <strong style={{ display: 'block', color: 'var(--navy)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>To foster</strong>
                            a culture where our team respects customer requirements, environmental responsibilities, and regulatory compliance, while continuously enhancing their skills and expertise.
                        </li>
                        <li style={{ padding: '2rem', background: '#fff', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)', borderTop: '4px solid var(--orange)' }}>
                            <strong style={{ display: 'block', color: 'var(--navy)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>To strengthen</strong>
                            our organization, resources, and infrastructure in alignment with the company’s growth and global development objectives.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
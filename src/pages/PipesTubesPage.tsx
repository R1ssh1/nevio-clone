import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'

export function PipesTubesPage() {
    return (
        <div className="page-stack">
            <Seo
                title={pageMeta.pipesTubes.title}
                description={pageMeta.pipesTubes.description}
                path={pageMeta.pipesTubes.path}
            />
            <PageHero
                eyebrow="Pipes &amp; Tubes"
                title="Titanium and Stainless Steel Pipes and Tubes for Critical Applications."
                description="Specialist & India's largest supplier and exporter of high-grade pipes and tubes."
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

            <section className="container" style={{ marginTop: '4rem' }}>
                <article className="feature-split">
                    <div className="feature-split__media">
                        <img src="/assets/home/product-6.webp" alt="Stainless Steel Pipes and Tubes bundle" loading="lazy" />
                    </div>
                    <div className="feature-split__content">
                        <h2>Stainless Steel Pipes &amp; Tubes</h2>
                        <p>
                            Stainless Steel remains one of the most versatile and widely used materials across industries due to its strength, corrosion resistance, and long service life.
                        </p>
                        <ul className="feature-list">
                            <li><Link to="/products/stainless-steel-304-pipes-tubes">Stainless Steel 304 Pipes &amp; Tubes</Link></li>
                            <li><Link to="/products/stainless-steel-304l-pipes-tubes">Stainless Steel 304L Pipes &amp; Tubes</Link></li>
                            <li><Link to="/products/stainless-steel-316l-pipes-tubes">Stainless Steel 316L Pipes &amp; Tubes</Link></li>
                            <li><Link to="/products/stainless-steel-316ti-pipes-tubes">Stainless Steel 316Ti Pipes &amp; Tubes</Link></li>
                        </ul>
                    </div>
                </article>

                <article className="feature-split" style={{ direction: 'rtl' }}>
                    <div className="feature-split__media" style={{ direction: 'ltr' }}>
                        <img src="/assets/home/product-3.webp" alt="Titanium Pipes and Tubes rack" loading="lazy" />
                    </div>
                    <div className="feature-split__content" style={{ direction: 'ltr' }}>
                        <h2>Titanium Pipes &amp; Tubes</h2>
                        <p>
                            At Nevio Steel India, we provide a complete range of Titanium Pipes &amp; Tubes, Sheets &amp; Coils, Round Bars, and Wires, manufactured under stringent quality checks to deliver unmatched durability and consistency.
                        </p>
                        <ul className="feature-list">
                            <li><Link to="/products/titanium-grade-2-pipes-tubes">Titanium Gr 2 Pipes &amp; Tubes</Link></li>
                            <li><Link to="/products/titanium-grade-5-pipes-tubes">Titanium Gr 5 Pipes &amp; Tubes</Link></li>
                            <li><Link to="/products/titanium-eli-f136-pipes-tubes">Titanium ELI F136 Pipes &amp; Tubes</Link></li>
                        </ul>
                    </div>
                </article>
            </section>
        </div>
    )
}
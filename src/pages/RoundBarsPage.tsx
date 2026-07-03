import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'

export function RoundBarsPage() {
    return (
        <div className="page-stack">
            <Seo title={pageMeta.roundBars.title} description={pageMeta.roundBars.description} path={pageMeta.roundBars.path} />
            <PageHero
                eyebrow="Round Bars"
                title="Titanium and stainless steel round bars."
                description="A dedicated route for the round bars category helps product discovery and supports targeted search intent."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span>Round Bars</span>
                    </>
                }
            />
            <section className="container" style={{ marginTop: '4rem' }}>
                <article className="feature-split">
                    <div className="feature-split__media">
                        <img src="/assets/home/product-2.webp" alt="Stainless Steel Round Bars" loading="lazy" />
                    </div>
                    <div className="feature-split__content">
                        <h2>Stainless Steel Round Bars</h2>
                        <p>
                            Stainless Steel remains one of the most versatile and widely used materials across industries due to its strength, corrosion resistance, and long service life.
                        </p>
                        <ul className="feature-list">
                            <li><Link to="/products/stainless-steel-304-round-bars">Stainless Steel 304 Round Bars</Link></li>
                            <li><Link to="/products/stainless-steel-304l-round-bars">Stainless Steel 304L Round Bars</Link></li>
                            <li><Link to="/products/stainless-steel-316l-round-bars">Stainless Steel 316L Round Bars</Link></li>
                            <li><Link to="/products/stainless-steel-316ti-round-bars">Stainless Steel 316Ti Round Bars</Link></li>
                            <li><Link to="/products/stainless-steel-410-round-bars">Stainless Steel 410 Round Bars</Link></li>
                            <li><Link to="/products/stainless-steel-420-round-bars">Stainless Steel 420 Round Bars</Link></li>
                            <li><Link to="/products/stainless-steel-430f-round-bars">Stainless Steel 430F Round Bars</Link></li>
                            <li><Link to="/products/stainless-steel-440c-round-bars">Stainless Steel 440C Round Bars</Link></li>
                            <li><Link to="/products/stainless-steel-17-4-ph-round-bars">Stainless Steel 17-4 PH Round Bars</Link></li>
                        </ul>
                    </div>
                </article>

                <article className="feature-split" style={{ direction: 'rtl' }}>
                    <div className="feature-split__media" style={{ direction: 'ltr' }}>
                        <img src="/assets/home/product-3.webp" alt="Titanium Round Bars" loading="lazy" />
                    </div>
                    <div className="feature-split__content" style={{ direction: 'ltr' }}>
                        <h2>Titanium Round Bars</h2>
                        <p>
                            At Nevio Steel India, we provide a complete range of Titanium Round Bars manufactured under stringent quality checks to deliver unmatched durability and consistency.
                        </p>
                        <ul className="feature-list">
                            <li><Link to="/products/titanium-grade-2-round-bars">Titanium Gr 2 Round Bars</Link></li>
                            <li><Link to="/products/titanium-grade-5-round-bars">Titanium Gr 5 Round Bars</Link></li>
                            <li><Link to="/products/titanium-eli-f136-round-bars">Titanium ELI F136 Round Bars</Link></li>
                            <li><Link to="/products/titanium-grade-1-4-7-9-12-round-bars">Titanium Grade 1,4,7,9,12 Round Bars</Link></li>
                            <li><Link to="/products/titanium-ams-4911-6al-4v-round-bars">Titanium AMS 4911 Ti-6Al-4V Round Bars</Link></li>
                            <li><Link to="/products/titanium-6al-4v-alloys-round-bars">Titanium Ti 6Al-4V Round Bars</Link></li>
                            <li><Link to="/products/titanium-grade-23-round-bars">Titanium Grade 23 Round Bars</Link></li>
                        </ul>
                    </div>
                </article>
            </section>
        </div>
    )
}
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'

export function WiresPage() {
    return (
        <div className="page-stack">
            <Seo title={pageMeta.wires.title} description={pageMeta.wires.description} path={pageMeta.wires.path} />
            <PageHero
                eyebrow="Wires"
                title="Titanium and stainless steel wire products."
                description="This page will later hold wire specifications, application notes, and related product links."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span>Wires</span>
                    </>
                }
            />
            <section className="container" style={{ marginTop: '4rem' }}>
                <article className="feature-split">
                    <div className="feature-split__media">
                        <img src="/assets/home/product-4.webp" alt="Stainless Steel Wires" loading="lazy" />
                    </div>
                    <div className="feature-split__content">
                        <h2>Stainless Steel Wires</h2>
                        <p>
                            Stainless Steel remains one of the most versatile and widely used materials across industries due to its strength, corrosion resistance, and long service life.
                        </p>
                        <ul className="feature-list">
                            <li><Link to="/products/stainless-steel-304-wires">Stainless Steel 304 Wires</Link></li>
                            <li><Link to="/products/stainless-steel-304l-wires">Stainless Steel 304L Wires</Link></li>
                            <li><Link to="/products/stainless-steel-316l-wires">Stainless Steel 316L Wires</Link></li>
                            <li><Link to="/products/stainless-steel-316ti-wires">Stainless Steel 316Ti Wires</Link></li>
                        </ul>
                    </div>
                </article>

                <article className="feature-split" style={{ direction: 'rtl' }}>
                    <div className="feature-split__media" style={{ direction: 'ltr' }}>
                        <img src="/assets/home/product-1.webp" alt="Titanium Wires" loading="lazy" />
                    </div>
                    <div className="feature-split__content" style={{ direction: 'ltr' }}>
                        <h2>Titanium Wires</h2>
                        <p>
                            At Nevio Steel India, we provide a complete range of Titanium Wires manufactured under stringent quality checks to deliver unmatched durability and consistency.
                        </p>
                        <ul className="feature-list">
                            <li><Link to="/products/titanium-grade-2-wires">Titanium Gr 2 Wires</Link></li>
                            <li><Link to="/products/titanium-grade-5-wires">Titanium Gr 5 Wires</Link></li>
                            <li><Link to="/products/titanium-eli-f136-wires">Titanium ELI F136 Wires</Link></li>
                        </ul>
                    </div>
                </article>
            </section>
        </div>
    )
}
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'

export function SheetsCoilsPage() {
    return (
        <div className="page-stack">
            <Seo title={pageMeta.sheetsCoils.title} description={pageMeta.sheetsCoils.description} path={pageMeta.sheetsCoils.path} />
            <PageHero
                eyebrow="Sheets & Coils"
                title="Titanium and stainless steel sheets and coils."
                description="A category page for sheet and coil products supports search visibility and a clearer site architecture."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span>Sheets &amp; Coils</span>
                    </>
                }
            />
            <section className="container" style={{ marginTop: '4rem' }}>
                <article className="feature-split">
                    <div className="feature-split__media">
                        <img src="/assets/home/product-5.webp" alt="Stainless Steel Sheets and Coils" loading="lazy" />
                    </div>
                    <div className="feature-split__content">
                        <h2>Stainless Steel Sheets &amp; Coils</h2>
                        <p>
                            Stainless Steel remains one of the most versatile and widely used materials across industries due to its strength, corrosion resistance, and long service life.
                        </p>
                        <ul className="feature-list">
                            <li><Link to="/products/stainless-steel-304-sheets-coils">Stainless Steel 304 Sheets &amp; Coils</Link></li>
                            <li><Link to="/products/stainless-steel-304l-sheets-coils">Stainless Steel 304L Sheets &amp; Coils</Link></li>
                            <li><Link to="/products/stainless-steel-316l-sheets-coils">Stainless Steel 316L Sheets &amp; Coils</Link></li>
                            <li><Link to="/products/stainless-steel-316ti-sheets-coils">Stainless Steel 316Ti Sheets &amp; Coils</Link></li>
                        </ul>
                    </div>
                </article>

                <article className="feature-split" style={{ direction: 'rtl' }}>
                    <div className="feature-split__media" style={{ direction: 'ltr' }}>
                        <img src="/assets/home/product-1.webp" alt="Titanium Sheets and Coils" loading="lazy" />
                    </div>
                    <div className="feature-split__content" style={{ direction: 'ltr' }}>
                        <h2>Titanium Sheets &amp; Coils</h2>
                        <p>
                            At Nevio Steel India, we provide a complete range of Titanium Sheets &amp; Coils manufactured under stringent quality checks to deliver unmatched durability and consistency.
                        </p>
                        <ul className="feature-list">
                            <li><Link to="/products/titanium-grade-2-sheets-coils">Titanium Gr 2 Sheets &amp; Coils</Link></li>
                            <li><Link to="/products/titanium-grade-5-sheets-coils">Titanium Gr 5 Sheets &amp; Coils</Link></li>
                            <li><Link to="/products/titanium-eli-f136-sheets-coils">Titanium ELI F136 Sheets &amp; Coils</Link></li>
                            <li><Link to="/products/titanium-grade-1-4-7-9-12-sheets-coils">Titanium Grade 1,4,7,9,12 Sheets &amp; Coils</Link></li>
                        </ul>
                    </div>
                </article>
            </section>
        </div>
    )
}
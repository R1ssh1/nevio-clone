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
            <section className="container page-content-grid page-content-grid--two">
                <article className="info-card">
                    <h2>Future content</h2>
                    <p>Product specifications and applications will be added here later.</p>
                </article>
                <article className="info-card">
                    <h2>SEO note</h2>
                    <p>The route gives this product name its own page instead of hiding it in a list.</p>
                </article>
            </section>
        </div>
    )
}
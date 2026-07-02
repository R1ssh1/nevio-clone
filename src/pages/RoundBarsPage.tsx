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
            <section className="container page-content-grid page-content-grid--two">
                <article className="info-card">
                    <h2>Future content</h2>
                    <p>We will add grades, sizes, and material details here.</p>
                </article>
                <article className="info-card">
                    <h2>SEO note</h2>
                    <p>This route strengthens the product cluster without duplicating the products page.</p>
                </article>
            </section>
        </div>
    )
}
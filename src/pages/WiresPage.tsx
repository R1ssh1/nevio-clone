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
            <section className="container page-content-grid page-content-grid--two">
                <article className="info-card">
                    <h2>Future content</h2>
                    <p>Wire product details will be added from the original site export later.</p>
                </article>
                <article className="info-card">
                    <h2>SEO note</h2>
                    <p>More route depth means the site can target more specific product queries.</p>
                </article>
            </section>
        </div>
    )
}
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
                title="Titanium and stainless steel pipes and tubes for critical applications."
                description="This route will support the most important search term cluster for the product line and link directly into related categories."
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

            <section className="container page-content-grid page-content-grid--two">
                <article className="info-card">
                    <h2>What will live here</h2>
                    <p>
                        Grades, standards, sizes, and application notes will be added once the page is mapped from the source site.
                    </p>
                </article>
                <article className="info-card">
                    <h2>Internal linking</h2>
                    <p>
                        Linking from the product hub and footer helps search engines understand the site structure.
                    </p>
                </article>
            </section>
        </div>
    )
}
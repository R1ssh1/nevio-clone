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
                title="Quality and compliance page placeholder."
                description="This page will later reflect the company’s quality controls, testing, and certificate messaging."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Quality Policy</span>
                    </>
                }
            />

            <section className="container page-content-grid page-content-grid--two">
                <article className="info-card">
                    <h2>Search visibility</h2>
                    <p>
                        Adding the policy page with unique metadata helps this important trust page get indexed separately.
                    </p>
                </article>
                <article className="info-card">
                    <h2>Trust signal</h2>
                    <p>
                        Quality pages often convert well because buyers use them to confirm standards and reliability.
                    </p>
                </article>
            </section>
        </div>
    )
}
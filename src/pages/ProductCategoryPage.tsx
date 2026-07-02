import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'

type ProductCategoryPageProps = {
    title: string
    eyebrow: string
    description: string
    seoTitle: string
    seoDescription: string
    path: string
    ctaLabel: string
    ctaPath: string
}

export function ProductCategoryPage({
    title,
    eyebrow,
    description,
    seoTitle,
    seoDescription,
    path,
    ctaLabel,
    ctaPath,
}: ProductCategoryPageProps) {
    return (
        <div className="page-stack">
            <Seo title={seoTitle} description={seoDescription} path={path} />
            <PageHero eyebrow={eyebrow} title={title} description={description} />

            <section className="container page-content-grid">
                <article className="info-card">
                    <h2>Product overview</h2>
                    <p>
                        This page will later include grades, sizes, standards, and industry use cases
                        from the saved site content.
                    </p>
                </article>
                <article className="info-card">
                    <h2>SEO target</h2>
                    <p>
                        Product names, internal links, and unique meta descriptions help the clone
                        rank for more specific search queries.
                    </p>
                </article>
                <article className="info-card">
                    <h2>Next step</h2>
                    <p>We can add detailed product tables and image galleries after this structure is stable.</p>
                </article>
            </section>

            <section className="container section-callout">
                <p>
                    Need a custom request? <Link to={ctaPath}>{ctaLabel}</Link> and we’ll follow up.
                </p>
            </section>
        </div>
    )
}
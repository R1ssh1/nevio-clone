import { useParams, Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'

export function ProductDetailPage() {
    const { id } = useParams()

    // Format "stainless-steel-304-pipes-tubes" -> "Stainless Steel 304 Pipes Tubes"
    const formattedTitle = id
        ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : 'Product Details'

    return (
        <div className="page-stack">
            <Seo
                title={`${formattedTitle} | Vedantara Metal & Alloys`}
                description={`Premium ${formattedTitle} manufactured and supplied globally by Vedantara Metal & Alloys.`}
                path={`/products/${id}`}
            />
            <PageHero
                eyebrow="Product Details"
                title={formattedTitle}
                description="Comprehensive specifications, grades, and dimensions will be featured here."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span>{formattedTitle}</span>
                    </>
                }
            />

            <section className="container page-content-grid page-content-grid--two" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
                <article className="info-card">
                    <h2>Technical Specifications</h2>
                    <p>Detailed dimensional tolerances, chemical compositions, and strength testing parameters for {formattedTitle} will be populated here during the final content migration.</p>
                </article>
                <article className="info-card">
                    <h2>Request a Quote</h2>
                    <p>For immediate inquiries regarding pricing, stock availability, or custom configurations, please reach out to our dedicated sales team.</p>
                </article>
            </section>
        </div>
    )
}

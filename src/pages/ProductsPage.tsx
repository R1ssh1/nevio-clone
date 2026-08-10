import { Link } from 'react-router-dom'
import { productCards } from '../data/site'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'

export function ProductsPage() {
    return (
        <div className="page-stack">
            <Seo
                title={pageMeta.products.title}
                description={pageMeta.products.description}
                path={pageMeta.products.path}
            />
            <PageHero
                eyebrow="Products"
                title="Our Products"
                description="Specialist &amp; India’s largest supplier and exporter of titanium &amp; stainless steel."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Products</span>
                    </>
                }
            />

            <section className="container product-grid product-grid--page">
                {productCards.map((card) => (
                    <Link to={card.href} className="product-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }} key={card.title}>
                        <div className="product-card__media">
                            <img src={card.image} alt={card.title} loading="lazy" />
                        </div>
                        <div className="product-card__footer">
                            <h3>{card.title}</h3>
                            <span>View</span>
                        </div>
                    </Link>
                ))}
            </section>
            
        </div>
    )
}
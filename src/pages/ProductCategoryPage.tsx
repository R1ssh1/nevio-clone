import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { dynamicCategories } from '../data/productDetails'
import { findProductByName } from '../data/productData'

type ProductCategoryPageProps = {
    title: string
    eyebrow: string
    description: string
    seoTitle: string
    seoDescription: string
    path: string
    ctaLabel: string
    ctaPath: string
    categorySlug: string
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
    categorySlug,
}: ProductCategoryPageProps) {
    const cat = dynamicCategories.find(c => c.slug === categorySlug);

    return (
        <div className="page-stack">
            <Seo title={seoTitle} description={seoDescription} path={path} />
            <PageHero
                eyebrow={eyebrow}
                title={title}
                description={description}
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span>{eyebrow}</span>
                    </>
                }
            />

            {cat && (
                <section className="container" style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                        {cat.subcategories.map((sub, index) => {
                            const fallbackImages = [
                                '/assets/home/pipes-tubes.webp',
                                '/assets/home/titanium-pipes-tubes.webp',
                                '/assets/home/stainless-steel-304-pipes-tubes.webp',
                                '/assets/home/sheets-coils.webp',
                                '/assets/home/round-bars.webp',
                                '/assets/home/wires.webp',
                            ];
                            const firstProduct = sub.productLinks[0];
                            let finalImgSrc = fallbackImages[index % fallbackImages.length];

                            if (firstProduct) {
                                // Try to get the actual product image from productData
                                const fullProduct = findProductByName(categorySlug, firstProduct.name);
                                if (fullProduct && fullProduct.images && fullProduct.images.length > 0) {
                                    finalImgSrc = fullProduct.images[0];
                                } else {
                                    // Fallback to the old logic of `/assets/products/...`
                                    finalImgSrc = `/assets/products/${firstProduct.slug}.png`;
                                }
                            }

                            return (
                                <article className="cat-subcat-row" key={sub.name}>
                                    <div className="cat-subcat-img">
                                        <img
                                            src={finalImgSrc}
                                            alt={sub.name}
                                            loading="lazy"
                                            onError={(e) => {
                                                const el = e.target as HTMLImageElement;
                                                const fallback = '/assets/home/product-6.webp';
                                                if (el.src.includes(fallback)) return; // prevent infinite loop
                                                
                                                if (firstProduct) {
                                                    const fullProduct = findProductByName(categorySlug, firstProduct.name);
                                                    if (fullProduct && fullProduct.images && fullProduct.images.length > 0 && !el.src.includes(fullProduct.images[0])) {
                                                        el.src = fullProduct.images[0];
                                                        return;
                                                    }
                                                }
                                                el.src = fallback;
                                            }}
                                        />
                                    </div>
                                    <div className="cat-subcat-content">
                                        <h2 className="cat-subcat-title">{sub.name}</h2>
                                        <ul className="cat-subcat-links">
                                            {sub.productLinks.map(g => (
                                                <li key={g.slug}>
                                                    <Link to={`/products/${categorySlug}/${g.slug}`}>
                                                        <span className="cat-link-arrow">→</span>
                                                        {g.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>
            )}

            <section className="container section-callout" style={{ marginBottom: '4rem' }}>
                <p>
                    Need a custom request?{' '}
                    <Link to={ctaPath}>{ctaLabel}</Link> and we'll follow up.
                </p>
            </section>
        </div>
    )
}
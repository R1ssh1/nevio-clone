import { CategoryPage } from '../components/CategoryPage'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { dynamicCategories } from '../data/productDetails'

const cat = dynamicCategories.find(c => c.slug === 'flanges')!
const info = products.find(p => p.slug === '/products/flanges')!

export function FlangesPage() {
    return (
        <CategoryPage
            seoTitle={pageMeta.flanges.title}
            seoDescription={pageMeta.flanges.description}
            seoPath={pageMeta.flanges.path}
            eyebrow="Flanges"
            heroTitle="Stainless Steel, Titanium & Alloy Flanges."
            heroDescription="High-quality flanges for industrial piping — stainless steel, titanium, duplex, nickel alloys. ASME B16.5 / B16.47 compliant."
            breadcrumbLabel="Flanges"
            cat={cat}
            info={info}
        />
    )
}

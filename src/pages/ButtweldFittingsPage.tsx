import { CategoryPage } from '../components/CategoryPage'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { dynamicCategories } from '../data/productDetails'

const cat = dynamicCategories.find(c => c.slug === 'buttweld-fittings')!
const info = products.find(p => p.slug === '/products/buttweld-fittings')!

export function ButtweldFittingsPage() {
    return (
        <CategoryPage
            seoTitle={pageMeta.buttweldFittings.title}
            seoDescription={pageMeta.buttweldFittings.description}
            seoPath={pageMeta.buttweldFittings.path}
            eyebrow="Buttweld Fittings"
            heroTitle="Industrial Buttweld Fittings."
            heroDescription="High-quality stainless steel, titanium, nickel alloy, and specialty buttweld fittings for pipeline and industrial applications. ASME B16.9 compliant."
            breadcrumbLabel="Buttweld Fittings"
            cat={cat}
            info={info}
        />
    )
}

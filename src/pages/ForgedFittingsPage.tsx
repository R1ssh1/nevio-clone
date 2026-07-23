import { CategoryPage } from '../components/CategoryPage'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { dynamicCategories } from '../data/productDetails'

const cat = dynamicCategories.find(c => c.slug === 'forged-fittings')!
const info = products.find(p => p.slug === '/products/forged-fittings')!

export function ForgedFittingsPage() {
    return (
        <CategoryPage
            seoTitle={pageMeta.forgedFittings.title}
            seoDescription={pageMeta.forgedFittings.description}
            seoPath={pageMeta.forgedFittings.path}
            eyebrow="Forged Fittings"
            heroTitle="Stainless Steel, Carbon Steel & Alloy Steel Fittings."
            heroDescription="Premium forged fittings in stainless steel, carbon steel, duplex, and specialty alloy steel. ASME B16.11 / MSS SP-83 compliant."
            breadcrumbLabel="Forged Fittings"
            cat={cat}
            info={info}
        />
    )
}

import { CategoryPage } from '../components/CategoryPage'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { dynamicCategories } from '../data/productDetails'

const cat = dynamicCategories.find(c => c.slug === 'fasteners')!
const info = products.find(p => p.slug === '/products/fasteners')!

export function FastenersPage() {
    return (
        <CategoryPage
            seoTitle={pageMeta.fasteners.title}
            seoDescription={pageMeta.fasteners.description}
            seoPath={pageMeta.fasteners.path}
            eyebrow="Fasteners"
            heroTitle="Industrial Fasteners — Bolts, Nuts, Studs & More."
            heroDescription="Industrial-grade fasteners in titanium, stainless steel, duplex steel, and specialty alloys. ASTM / ASME / DIN compliant."
            breadcrumbLabel="Fasteners"
            cat={cat}
            info={info}
        />
    )
}

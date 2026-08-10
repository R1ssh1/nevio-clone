import { CategoryPage } from '../components/CategoryPage'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { dynamicCategories } from '../data/productDetails'

const cat = dynamicCategories.find(c => c.slug === 'valves')!
const info = products.find(p => p.slug === '/products/valves')!

export function ValvesPage() {
    return (
        <CategoryPage
            seoTitle={pageMeta.valves.title}
            seoDescription={pageMeta.valves.description}
            seoPath={pageMeta.valves.path}
            eyebrow="Valves"
            heroTitle="Industrial Valves — Gate, Ball, Butterfly & Check Valves."
            heroDescription="High-performance industrial valves available in stainless steel, duplex, carbon steel, and specialty alloys. ASTM / ASME / API compliant."
            breadcrumbLabel="Valves"
            cat={cat}
            info={info}
        />
    )
}

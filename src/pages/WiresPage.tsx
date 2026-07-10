import { CategoryPage } from '../components/CategoryPage'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { dynamicCategories } from '../data/productDetails'

const cat = dynamicCategories.find(c => c.slug === 'wires')!
const info = products.find(p => p.slug === '/products/wires')!

export function WiresPage() {
    return (
        <CategoryPage
            seoTitle={pageMeta.wires.title}
            seoDescription={pageMeta.wires.description}
            seoPath={pageMeta.wires.path}
            eyebrow="Wires"
            heroTitle="Stainless Steel, Titanium & Alloy Wires."
            heroDescription="Specialist & India's largest supplier and exporter of wires — stainless steel, titanium, duplex, nickel alloys. For industrial, aerospace, and medical applications."
            breadcrumbLabel="Wires"
            cat={cat}
            info={info}
        />
    )
}

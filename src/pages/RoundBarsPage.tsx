import { CategoryPage } from '../components/CategoryPage'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { dynamicCategories } from '../data/productDetails'

const cat = dynamicCategories.find(c => c.slug === 'round-bars')!
const info = products.find(p => p.slug === '/products/round-bars')!

export function RoundBarsPage() {
    return (
        <CategoryPage
            seoTitle={pageMeta.roundBars.title}
            seoDescription={pageMeta.roundBars.description}
            seoPath={pageMeta.roundBars.path}
            eyebrow="Round Bars"
            heroTitle="Stainless Steel, Titanium & Alloy Round Bars."
            heroDescription="Specialist & India's largest supplier and exporter of round bars and rods — stainless steel, titanium, duplex, nickel alloys and more."
            breadcrumbLabel="Round Bars"
            cat={cat}
            info={info}
        />
    )
}

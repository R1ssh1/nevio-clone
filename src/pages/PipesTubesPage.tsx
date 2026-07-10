import { CategoryPage } from '../components/CategoryPage'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { dynamicCategories } from '../data/productDetails'

const cat = dynamicCategories.find(c => c.slug === 'pipes-tubes')!
const info = products.find(p => p.slug === '/products/pipes-tubes')!

export function PipesTubesPage() {
    return (
        <CategoryPage
            seoTitle={pageMeta.pipesTubes.title}
            seoDescription={pageMeta.pipesTubes.description}
            seoPath={pageMeta.pipesTubes.path}
            eyebrow="Pipes & Tubes"
            heroTitle="Titanium and Stainless Steel Pipes & Tubes for Critical Applications."
            heroDescription="Specialist & India's largest supplier and exporter of high-grade pipes and tubes — stainless steel, titanium, duplex, nickel alloys and more."
            breadcrumbLabel="Pipes & Tubes"
            cat={cat}
            info={info}
        />
    )
}

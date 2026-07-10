import { CategoryPage } from '../components/CategoryPage'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { specializedCategory } from '../data/specializedProducts'

const info = products.find(p => p.slug === '/products/specialized-products')!

export function SpecializedProductsPage() {
    return (
        <CategoryPage
            seoTitle={pageMeta.specializedProducts.title}
            seoDescription={pageMeta.specializedProducts.description}
            seoPath={pageMeta.specializedProducts.path}
            eyebrow="Specialized Products"
            heroTitle="Specialized & High-Performance Steel Products."
            heroDescription="Manufacturer, exporter & stockist of Abrasion Resistant Plates, Corten Steel, Boiler Steel, Armour Steel, Manganese Steel and more — Mumbai, India."
            breadcrumbLabel="Specialized Products"
            cat={specializedCategory}
            info={info}
        />
    )
}

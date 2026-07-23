import { CategoryPage } from '../components/CategoryPage'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { dynamicCategories } from '../data/productDetails'

const cat = dynamicCategories.find(c => c.slug === 'sheets-coils')!
const info = products.find(p => p.slug === '/products/sheets-coils')!

export function SheetsCoilsPage() {
    return (
        <CategoryPage
            seoTitle={pageMeta.sheetsCoils.title}
            seoDescription={pageMeta.sheetsCoils.description}
            seoPath={pageMeta.sheetsCoils.path}
            eyebrow="Plates & Sheets"
            heroTitle="Stainless Steel, Carbon Steel & Alloy Steel Plates & Sheets."
            heroDescription="Specialist & India's largest supplier and exporter of plates and sheets — stainless steel, titanium, duplex, aluminium alloys and more."
            breadcrumbLabel="Plates & Sheets"
            cat={cat}
            info={info}
        />
    )
}

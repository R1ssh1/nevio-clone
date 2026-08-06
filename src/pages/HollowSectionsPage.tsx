import { CategoryPage } from '../components/CategoryPage'
import { pageMeta } from './pageMeta'
import { products } from '../data/products'
import { dynamicCategories } from '../data/productDetails'

const cat = dynamicCategories.find(c => c.slug === 'hollow-sections')!
const info = products.find(p => p.slug === '/products/hollow-sections') ?? {
    name: 'Hollow Sections', slug: '/products/hollow-sections',
    description1: '', description2: '',
    description3: 'Vedantara Metal & Alloys Pvt Ltd manufactures Hollow Sections under the stringent supervision of proficient engineers. All sections conform to IS 4923, EN 10210, EN 10219, ASTM A500 standards.',
    description4: 'We deliver defect-free Hollow Sections globally with complete MTC documentation. Packaging ensures safe transit with quality reports, test certificates, and material test certificates.',
    seoKeywords: '',
}

export function HollowSectionsPage() {
    return (
        <CategoryPage
            seoTitle={pageMeta.hollowSections.title}
            seoDescription={pageMeta.hollowSections.description}
            seoPath={pageMeta.hollowSections.path}
            eyebrow="Hollow Sections"
            heroTitle="SHS, RHS & CHS Hollow Sections."
            heroDescription="Square, rectangular, and circular hollow sections for structural and industrial applications."
            breadcrumbLabel="Hollow Sections"
            cat={cat}
            info={info}
        />
    )
}

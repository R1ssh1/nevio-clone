import { Link } from 'react-router-dom'
import { PageHero } from './PageHero'
import { Seo } from './Seo'
import { toSeoSlug } from '../data/slug'
import { dynamicProducts, type DynamicCategory } from '../data/productDetails'
import type { ProductInfo } from '../data/products'

interface CategoryPageProps {
  seoTitle: string
  seoDescription: string
  seoPath: string
  eyebrow: string
  heroTitle: string
  heroDescription: string
  breadcrumbLabel: string
  cat: DynamicCategory
  info: ProductInfo
}

const FALLBACK_IMAGES = [
  '/assets/home/pipes-tubes.webp',
  '/assets/home/titanium-pipes-tubes.webp',
  '/assets/home/stainless-steel-304-pipes-tubes.webp',
  '/assets/home/sheets-coils.webp',
  '/assets/home/round-bars.webp',
  '/assets/home/wires.webp',
]

/** Sort subcategories so SS is first, Titanium is second, rest follow */
function sortSubcats(subs: DynamicCategory['subcategories']) {
  const sorted = [...subs]
  const ssPull = sorted.findIndex(s => s.name.toLowerCase().startsWith('stainless steel'))
  const ssSub = ssPull !== -1 ? sorted.splice(ssPull, 1)[0] : null
  const tiPull = sorted.findIndex(s => s.name.toLowerCase().startsWith('titanium'))
  const tiSub = tiPull !== -1 ? sorted.splice(tiPull, 1)[0] : null
  return [...(ssSub ? [ssSub] : []), ...(tiSub ? [tiSub] : []), ...sorted]
}

export function CategoryPage({
  seoTitle, seoDescription, seoPath,
  eyebrow, heroTitle, heroDescription, breadcrumbLabel,
  cat, info,
}: CategoryPageProps) {
  const sorted = sortSubcats(cat.subcategories)

  return (
    <div className="page-stack">
      <Seo title={seoTitle} description={seoDescription} path={seoPath} />
      <PageHero
        eyebrow={eyebrow}
        title={heroTitle}
        description={heroDescription}
        breadcrumbs={
          <>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <span>{breadcrumbLabel}</span>
          </>
        }
      />

      {/* ── prod-desc-band at TOP (replaces intro text paragraphs) ── */}
      <section className="container cat-desc-band-wrap">
        <div className="prod-desc-band">
          <div className="prod-desc-band__text">
            <h3>Manufacturing Capability</h3>
            <p>{info.description3}</p>
          </div>
          <div className="prod-desc-band__text">
            <h3>Quality Assurance &amp; Delivery</h3>
            <p>{info.description4}</p>
          </div>
        </div>
      </section>

      {/* ── Subcategory rows — reference layout ── */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <div className="ref-subcat-list">
          {sorted.map((sub, index) => {
            const isSS = sub.name.toLowerCase().startsWith('stainless steel')
            const isTi = sub.name.toLowerCase().startsWith('titanium')
            // SS: image left (not flipped); Titanium: image right (flipped)
            // Remaining: alternate — even index = left, odd = right
            const imageRight = isTi || (!isSS && index % 2 !== 0)

            const firstProduct = sub.productLinks[0]
            let imgSrc = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length]

            if (sub.image) {
              // Explicit image set on the subcategory — use it directly
              imgSrc = sub.image
            } else if (firstProduct) {
              const dp = dynamicProducts.find(
                p => p.categorySlug === cat.slug && p.slug === firstProduct.slug
              )
              if (dp?.image) {
                imgSrc = dp.image
              } else {
                // Slug-based guess as secondary fallback (png then webp)
                imgSrc = `/assets/products/${firstProduct.slug}.png`
              }
            }

            return (
              <article
                className={`ref-subcat-row${imageRight ? ' ref-subcat-row--flipped' : ''}`}
                key={sub.name}
              >
                <div className="ref-subcat-img">
                  <img
                    src={imgSrc}
                    alt={sub.name}
                    loading="lazy"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement
                      const fallback = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length]
                      if (!el.src.endsWith(fallback)) {
                        el.src = fallback
                      }
                    }}
                  />
                </div>
                <div className="ref-subcat-content">
                  <h2 className="ref-subcat-title">{sub.name}</h2>
                  <ul className="ref-subcat-links">
                    {sub.productLinks.map(g => (
                      <li key={g.slug}>
                        <Link to={`/products/${cat.slug}/${toSeoSlug(g.slug)}`}>
                          <span className="ref-link-arrow">→</span>
                          {g.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

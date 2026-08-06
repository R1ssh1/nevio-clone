import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Seo } from '../components/Seo';
import type { DynamicProduct, ProductTable } from '../data/productDetails';
import { dynamicCategories } from '../data/productDetails';
import { specializedCategory } from '../data/specializedProducts';
import { fromSeoSlug, toSeoSlug } from '../data/slug';
import { findProductByName } from '../data/productData';

/** All product categories in sidebar order */
const ALL_CATEGORIES = [
  ...dynamicCategories.filter(c => c.slug !== 'hollow-sections'),
  specializedCategory,
]

/** Friendly display name for a category slug */
function catLabel(slug: string): string {
  const found = ALL_CATEGORIES.find(c => c.slug === slug)
  if (found) return found.title
  return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

async function loadProduct(categorySlug: string, slug: string): Promise<DynamicProduct | undefined> {
  if (categorySlug === 'specialized-products') {
    const { specializedProductDetails } = await import('../data/specializedProductDetails');
    return specializedProductDetails.find((p) => p.categorySlug === categorySlug && p.slug === slug);
  } else {
    const { dynamicProducts } = await import('../data/productDetails');
    return dynamicProducts.find((p) => p.categorySlug === categorySlug && p.slug === slug);
  }
}

// ─── Hero Image ───────────────────────────────────────────────────────────────
function ProductImageGallery({ images, alt }: { images: string[]; alt: string }) {
  if (!images || images.length === 0) return null;
  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <img
          src={images[0]}
          alt={alt}
          className="product-gallery__hero"
          loading="eager"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/home/product-6.webp';
          }}
        />
      </div>
    </div>
  );
}

// ─── Encoding fix ────────────────────────────────────────────────────────────
function fixEncoding(s: string): string {
  return s
    .replace(/â€"/g, '–')
    .replace(/â€™/g, "'")
    .replace(/Â°/g, '°')
    .replace(/Â®/g, '®')
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"');
}

// ─── Content Block Types ──────────────────────────────────────────────────────
type ContentBlock =
  | { kind: 'prose'; text: string }
  | { kind: 'variantList'; items: string[] }
  | { kind: 'specBlock'; text: string }
  | { kind: 'applicationNote'; text: string }
  | { kind: 'toc'; tables: ProductTable[] };

function classifyDescItem(text: string): ContentBlock | null {
  const commas = (text.match(/,/g) || []).length;
  const colonPairs = (text.match(/ : /g) || []).length;
  if (colonPairs >= 2 || /Specifications\s*:/i.test(text) || /Standard\s*:/i.test(text)) {
    return { kind: 'specBlock', text };
  }
  if (/are used in a wide range|Application Industries|used in the following/i.test(text)) {
    return { kind: 'applicationNote', text };
  }
  if (commas >= 3 && text.length < 500) {
    const items = text.split(/,\s*/);
    if (items.every(item => item.length < 120)) {
      return { kind: 'variantList', items };
    }
  }
  return { kind: 'prose', text };
}

function buildContentBlocks(
  description: string[],
  tables: ProductTable[]
): { blocks: ContentBlock[]; seoKeywords: string } {
  const SEO_DUMP_THRESHOLD = 25;
  const BOILERPLATE_PREFIX = 'Vedantara Metal & Alloys Pvt Ltd is one of the leading manufacturer, supplier and stockiest';

  let seoKeywords = '';
  const items = description.filter(item => {
    const commas = (item.match(/,/g) || []).length;
    if (commas > SEO_DUMP_THRESHOLD) { seoKeywords = item; return false; }
    if (item.startsWith(BOILERPLATE_PREFIX)) return false;
    return true;
  });

  let variantAccumulator: string[][] = [];
  const classified: ContentBlock[] = [];

  for (const item of items) {
    const block = classifyDescItem(item.trim());
    if (block === null) continue;
    if (block.kind === 'variantList') {
      variantAccumulator.push(block.items);
    } else {
      if (variantAccumulator.length > 0) {
        classified.push({ kind: 'variantList', items: variantAccumulator.flat() });
        variantAccumulator = [];
      }
      classified.push(block);
    }
  }
  if (variantAccumulator.length > 0) {
    classified.push({ kind: 'variantList', items: variantAccumulator.flat() });
  }

  const hasTitledTables = tables.some(t => t.title);
  if (!hasTitledTables) return { blocks: classified, seoKeywords };

  const firstNonProseIdx = classified.findIndex(b => b.kind !== 'prose');
  const tocBlock: ContentBlock = { kind: 'toc', tables };

  if (firstNonProseIdx === -1) {
    return { blocks: [...classified, tocBlock], seoKeywords };
  } else {
    return {
      blocks: [
        ...classified.slice(0, firstNonProseIdx),
        tocBlock,
        ...classified.slice(firstNonProseIdx),
      ],
      seoKeywords,
    };
  }
}

function renderContentBlocks(blocks: ContentBlock[]) {
  return blocks.map((block, i) => {
    if (block.kind === 'prose') {
      return <p key={i} className="product-detail-content__para">{block.text}</p>;
    }

    if (block.kind === 'toc') {
      const titledTables = block.tables.filter(t => t.title);
      if (titledTables.length === 0) return null;
      return (
        <div key={i} className="tve_contents_table">
          <span className="tble-cont">Table Of Content</span>
          <div className="tble-contents-table">
            <div className="ct_column">
              {block.tables.map((table, ti) =>
                table.title ? (
                  <div key={`toc-${ti}`}>
                    <a href={`#table-${ti}`}>{table.title}</a>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      );
    }

    if (block.kind === 'variantList') {
      return (
        <div key={i} className="product-variants-block">
          <h3 className="product-variants-block__title">Available Types</h3>
          <ul className="product-spec-list">
            {block.items.map((item, j) => <li key={j}>{item.trim()}</li>)}
          </ul>
        </div>
      );
    }

    if (block.kind === 'specBlock') {
      const pairs = block.text
        .split(/(?<=\S)\s+(?=[A-Z][a-z]+(?: [A-Z][a-z]+)* : )/)
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => {
          const idx = line.indexOf(' : ');
          if (idx !== -1) return { label: line.slice(0, idx).trim(), value: line.slice(idx + 3).trim() };
          return { label: '', value: line };
        });
      return (
        <div key={i} className="product-spec-inline">
          <h3 className="product-spec-inline__title">Specifications &amp; Standards</h3>
          <dl className="product-spec-dl">
            {pairs.map((p, j) =>
              p.label ? (
                <div key={j} className="product-spec-dl__row">
                  <dt>{p.label}</dt>
                  <dd>{p.value}</dd>
                </div>
              ) : (
                <div key={j} className="product-spec-dl__row product-spec-dl__row--full">
                  <dd>{p.value}</dd>
                </div>
              )
            )}
          </dl>
        </div>
      );
    }

    if (block.kind === 'applicationNote') {
      const industries = [
        'Petrochemical Industry', 'Oil and Gas Industry', 'Chemical Industry',
        'Power Plant Industry', 'Energy Industry', 'Pharmaceuticals Industry',
        'Pulp & Paper Industry', 'Food Processing Industry',
        'Aerospace Industry', 'Refining Industry',
      ];
      return (
        <div key={i} className="product-application-note">
          <h3 className="product-application-note__title">Application Industries</h3>
          <p className="product-application-note__text">{block.text}</p>
          <ul className="product-industry-list">
            {industries.map((ind) => <li key={ind}>{ind}</li>)}
          </ul>
        </div>
      );
    }

    return null;
  });
}

// ─── Main Page Component ──────────────────────────────────────────────────────
export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const pathParts = location.pathname.split('/');
  const categorySlug = pathParts.length > 2 ? pathParts[2] : '';
  const rawSlug = pathParts.length > 3 ? pathParts[3] : (id ?? '');
  // Strip SEO suffix to get the base slug for product lookup
  const slugFromPath = fromSeoSlug(rawSlug);

  const [product, setProduct] = useState<DynamicProduct | null | undefined>(undefined);

  useEffect(() => {
    setProduct(undefined);
    loadProduct(categorySlug, slugFromPath).then((p) => setProduct(p ?? null));
  }, [categorySlug, slugFromPath]);

  if (product === undefined) {
    return (
      <div className="container" style={{ marginTop: '6rem', textAlign: 'center' }}>
        <p>Loading…</p>
      </div>
    );
  }

  if (product === null) {
    return (
      <div className="container" style={{ marginTop: '4rem' }}>
        <h2>Product not found</h2>
        <p>The requested product could not be located.</p>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  let heroImage = product.image ?? product.images?.[0] ?? `/assets/products/${slugFromPath}.png`;
  let allImages = product.images?.length ? product.images : [heroImage];

  // Try to load real mapped images from JSON data
  const realProduct = findProductByName(product.categorySlug, product.productName);
  if (realProduct && realProduct.images && realProduct.images.length > 0) {
    heroImage = realProduct.images[0];
    allImages = realProduct.images;
  }

  // Current category data
  const catObj = ALL_CATEGORIES.find(c => c.slug === categorySlug);

  // Similar Products: siblings within same subcategory
  const currentSubcat = catObj?.subcategories.find(s =>
    s.productLinks.some(l => l.slug === slugFromPath)
  );
  const similarProducts = (currentSubcat?.productLinks ?? []).filter(l => l.slug !== slugFromPath);

  const heroDesc = (product.description?.[0] ?? '').split(/\.\s+/).slice(0, 2).join('. ') + '.';
  const { blocks: contentBlocks, seoKeywords } = buildContentBlocks(product.description, product.tables ?? []);

  // SEO-enriched page title
  const seoTitle = `${product.productName} Supplier, Exporter, Stockist in Mumbai | Vedantara Metal & Alloys Pvt Ltd`;
  const seoDesc = `Buy ${product.productName} from Vedantara Metal & Alloys Pvt Ltd — leading Manufacturer, Supplier, Exporter & Stockist in Mumbai, India. Best price, fast delivery, complete documentation.`;

  return (
    <div className="page-stack">
      <Seo
        title={seoTitle}
        description={seoDesc}
        path={location.pathname}
      />
      <PageHero
        eyebrow={product.subCategoryName}
        title={product.productName}
        description={heroDesc}
        breadcrumbs={
          <>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <Link to={`/products/${product.categorySlug}`}>
              {catLabel(product.categorySlug)}
            </Link>
            <span>/</span>
            <span>{product.productName}</span>
          </>
        }
      />

      <section className="container" style={{ marginTop: '4rem', marginBottom: '4rem', maxWidth: '1170px' }}>
        <div className="product-detail-layout">

          {/* ── LEFT: main content ── */}
          <div className="product-detail-main">

            <ProductImageGallery images={allImages} alt={product.productName} />

            <div className="product-detail-content">
              <h2>{product.productName} Manufacturer, Supplier &amp; Exporter</h2>

              {renderContentBlocks(contentBlocks)}

              {/* Technical Tables */}
              {product.tables && product.tables.length > 0 && (
                <div className="product-tables" style={{ marginTop: '2.5rem' }}>
                  {product.tables.map((table, ti) => (
                    <div key={ti} id={`table-${ti}`} style={{ marginBottom: '2.5rem', scrollMarginTop: '100px' }}>
                      {table.title && (
                        <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--navy)' }}>
                          {table.title}
                        </h3>
                      )}
                      <div style={{ overflowX: 'auto' }}>
                        <table className="spec-table spec-table--light">
                          {table.rows[0] && (
                            <thead>
                              <tr>
                                {table.rows[0].map((cell, ci) => (
                                  <th key={ci}>{fixEncoding(cell)}</th>
                                ))}
                              </tr>
                            </thead>
                          )}
                          <tbody>
                            {table.rows.slice(1).map((row, ri) => (
                              <tr key={ri}>
                                {row.map((cell, ci) => (
                                  <td key={ci}>{fixEncoding(cell)}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ── Enquiry CTA ── */}
              <div className="product-enquiry-band">
                <div className="product-enquiry-band__text">
                  <h3>Get the Latest Price List for {product.productName}</h3>
                  <p>
                    Vedantara Metal &amp; Alloys Pvt Ltd is one of India's leading manufacturers and
                    suppliers. Contact us for immediate pricing and stock availability.
                  </p>
                </div>
                <Link to="/contact-us" className="product-enquiry-band__btn">
                  Send Us Your Requirement
                </Link>
              </div>

              {seoKeywords && (
                <div className="product-seo-tags">
                  <h4 className="product-seo-tags__title">People Also Searched For</h4>
                  <p className="product-seo-tags__text">{seoKeywords}</p>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT: sidebar ── */}
          <aside className="product-detail-sidebar">

            {/* ── Our Products: all categories ── */}
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Our Products</h3>
              <ul className="sidebar-cat-nav">
                {ALL_CATEGORIES.map(cat => (
                  <li key={cat.slug} className={cat.slug === categorySlug ? 'sidebar-cat-nav__item--active' : ''}>
                    <Link to={`/products/${cat.slug}`}>{cat.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Similar Products: siblings in same subcategory ── */}
            {similarProducts.length > 0 && (
              <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Similar Products</h3>
                <ul className="sidebar-nav">
                  {similarProducts.slice(0, 10).map(prod => (
                    <li key={prod.slug}>
                      <Link to={`/products/${categorySlug}/${toSeoSlug(prod.slug)}`}>
                        {prod.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                {similarProducts.length > 10 && (
                  <Link to={`/products/${categorySlug}`} style={{ fontSize: '0.85rem', color: 'var(--navy)', marginTop: '0.8rem', display: 'block' }}>
                    View all →
                  </Link>
                )}
              </div>
            )}

            {/* ── Request a Quote ── */}
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Request a Quote</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1.2rem' }}>
                Get immediate pricing and stock availability for {product.productName}.
              </p>
              <Link to="/contact-us" className="primary-button" style={{ width: '100%' }}>
                Contact Sales
              </Link>
            </div>

            {/* ── Need Assistance ── */}
            <div className="sidebar-widget bg-navy">
              <h3 className="sidebar-widget-title text-white">Need Assistance?</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.2rem' }}>
                Our technical experts are ready to help you find the right material.
              </p>
              <a href="tel:+919876543210" className="contact-link-light">📞 +91 98765 43210</a>
              <a href="mailto:sales@vedantarametals.com" className="contact-link-light">✉️ sales@vedantarametals.com</a>
            </div>

          </aside>

        </div>
      </section>
    </div>
  );
}

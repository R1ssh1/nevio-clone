import { useParams, Link, useLocation } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'

const categoryNames: Record<string, string> = {
    'pipes-tubes': 'Pipes & Tubes',
    'sheets-coils': 'Plates & Sheets',
    'round-bars': 'Round Bars',
    'wires': 'Wires',
    'flanges': 'Flanges',
    'forged-fittings': 'Forged Fittings',
    'buttweld-fittings': 'Buttweld Fittings',
    'fasteners': 'Fasteners',
    'hollow-sections': 'Hollow Sections',
    'products': 'Products'
}

import { products } from '../data/products'
import { productGrades } from '../data/grades'

export function ProductDetailPage() {
    const { id } = useParams()
    const location = useLocation()
    
    // e.g. "/products/pipes-tubes/ss-304-pipes-tubes" -> ["", "products", "pipes-tubes", "ss-304-pipes-tubes"]
    const pathParts = location.pathname.split('/')
    const categorySlug = pathParts.length > 3 ? pathParts[2] : 'pipes-tubes'
    const categoryName = categoryNames[categorySlug] || 'Products'
    const productInfo = products.find((p) => p.slug === `/products/${categorySlug}`)
    const gradeInfo = productGrades.find((g) => g.slug === location.pathname)

    // Format "stainless-steel-304-pipes-tubes" -> "Stainless Steel 304 Pipes Tubes"
    const formattedTitle = gradeInfo 
        ? gradeInfo.name 
        : id
            ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            : 'Product Details'
    
    // Some basic conditional logic to show different images based on title keywords
    let heroImage = '/assets/home/pipes-tubes.webp';
    if (id?.includes('flanges') || categorySlug === 'flanges') heroImage = '/assets/home/product-6.webp';
    else if (id?.includes('fastener') || categorySlug === 'fasteners') heroImage = '/assets/home/product-7.webp';
    else if (id?.includes('round-bar') || categorySlug === 'round-bars') heroImage = '/assets/home/round-bars.webp';
    else if (id?.includes('sheet') || id?.includes('plate') || categorySlug === 'sheets-coils') heroImage = '/assets/home/sheets-coils.webp';
    else if (id?.includes('wire') || categorySlug === 'wires') heroImage = '/assets/home/wires.webp';

    return (
        <div className="page-stack">
            <Seo
                title={`${formattedTitle} | Vedantara Metal & Alloys`}
                description={`Premium ${formattedTitle} manufactured and supplied globally by Vedantara Metal & Alloys.`}
                path={location.pathname}
            />
            <PageHero
                eyebrow={categoryName}
                title={formattedTitle}
                description={`Comprehensive specifications, grades, and dimensions for ${formattedTitle}.`}
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <Link to={`/products/${categorySlug}`}>{categoryName}</Link>
                        <span>/</span>
                        <span>{formattedTitle}</span>
                    </>
                }
            />

            <section className="container" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
                <div className="product-detail-layout">
                    
                    <div className="product-detail-main">
                        <img src={heroImage} alt={formattedTitle} className="product-detail-hero-img" loading="lazy" />
                        
                        <div className="product-detail-content">
                            <h2>{formattedTitle} Manufacturer, Supplier &amp; Exporter</h2>
                            
                            {gradeInfo ? (
                                <>
                                    {gradeInfo.introParagraphs.map((p, idx) => (
                                        <p key={idx}>{p}</p>
                                    ))}
                                    
                                    <h2 style={{ fontSize: '1.1rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--navy)', lineHeight: 1.6 }}>
                                        {gradeInfo.seoKeywords}
                                    </h2>
                                </>
                            ) : productInfo ? (
                                <>
                                    <p>{productInfo.description1}</p>
                                    <p>{productInfo.description2}</p>

                                    <h2 style={{ fontSize: '1.1rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--navy)', lineHeight: 1.6 }}>
                                        {productInfo.seoKeywords}
                                    </h2>

                                    <p>{productInfo.description3}</p>
                                    <p>{productInfo.description4}</p>
                                </>
                            ) : (
                                <>
                                    <p>
                                        Vedantara Metal &amp; Alloys is a well-known manufacturer and supplier of high-quality <strong>{formattedTitle}</strong>. 
                                        Our exclusive range of {formattedTitle} has high demand in national and international markets. These products are manufactured at our plant with dimensional accuracy, sturdy construction, and flawless finish. 
                                        They are suitable for numerous industrial applications.
                                    </p>
                                    <p>
                                        <strong>{formattedTitle}</strong> are widely used for critical applications. These products offer excellent resistance and improved strength at high-temperature working conditions. 
                                        They are highly ductile and durable and resist corrosion in severe environments.
                                        Vedantara Metal &amp; Alloys assures high functionality and longer life expectancy of these products.
                                    </p>
                                    <p>
                                        Vedantara Metal &amp; Alloys manufactures <strong><em>{formattedTitle}</em></strong> under the stringent supervision of proficient engineers. 
                                        We have world-class machinery and manufacturing setup. All production processes are strictly followed as per standard operating procedures.
                                    </p>
                                    <p>
                                        Vedantara Metal &amp; Alloys delivers defect-free {formattedTitle} to all our customers across the world within the stipulated time at pocket-friendly rates, along with full documentation including quality reports and test certificates.
                                    </p>
                                </>
                            )}
                        </div>

                        {gradeInfo ? (
                            <>
                                <div className="product-detail-specs">
                                    <h3>Chemical Composition</h3>
                                    <div className="spec-table-wrap" style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
                                        <table className="spec-table detail-table">
                                            <thead>
                                                <tr>
                                                    <th>Element</th>
                                                    <th>Composition Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {gradeInfo.chemicalComposition.map((item, idx) => (
                                                    <tr key={idx}>
                                                        <th>{item.element}</th>
                                                        <td>{item.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="product-detail-specs">
                                    <h3>Mechanical Properties</h3>
                                    <div className="spec-table-wrap" style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
                                        <table className="spec-table detail-table">
                                            <thead>
                                                <tr>
                                                    <th>Property</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {gradeInfo.mechanicalProperties.map((item, idx) => (
                                                    <tr key={idx}>
                                                        <th>{item.property}</th>
                                                        <td>{item.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="product-detail-specs">
                                    <h3>Application Industries</h3>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--muted)', lineHeight: '1.8' }}>
                                        {gradeInfo.applications.map((app, idx) => (
                                            <li key={idx}>{app}</li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="product-detail-specs">
                                    <h3>Technical Specifications</h3>
                                    <div className="spec-table-wrap" style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
                                        <table className="spec-table detail-table">
                                            <tbody>
                                                <tr>
                                                    <th>Specifications</th>
                                                    <td>ASTM, ASME, DIN, EN, ISO, JIS</td>
                                                </tr>
                                                <tr>
                                                    <th>Size Range</th>
                                                    <td>1/2" to 24" (Custom sizes available upon request)</td>
                                                </tr>
                                                <tr>
                                                    <th>Thickness</th>
                                                    <td>SCH 5, SCH 10, SCH 40, SCH 80, SCH 160, SCH XXS</td>
                                                </tr>
                                                <tr>
                                                    <th>Length</th>
                                                    <td>Single Random, Double Random &amp; Cut Length</td>
                                                </tr>
                                                <tr>
                                                    <th>Form</th>
                                                    <td>Round, Square, Rectangular, Coil, 'U' Shape, Pan Cake</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="product-detail-specs">
                                    <h3>Chemical Composition</h3>
                                    <div className="spec-table-wrap" style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
                                        <table className="spec-table detail-table">
                                            <thead>
                                                <tr>
                                                    <th>Grade</th>
                                                    <th>C</th>
                                                    <th>Mn</th>
                                                    <th>Si</th>
                                                    <th>P</th>
                                                    <th>S</th>
                                                    <th>Cr</th>
                                                    <th>Mo</th>
                                                    <th>Ni</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Standard Value</td>
                                                    <td>0.08 max</td>
                                                    <td>2.00 max</td>
                                                    <td>0.75 max</td>
                                                    <td>0.045 max</td>
                                                    <td>0.030 max</td>
                                                    <td>18.00 - 20.00</td>
                                                    <td>-</td>
                                                    <td>8.00 - 10.50</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <aside className="product-detail-sidebar">
                        <div className="sidebar-widget">
                            <h3 className="sidebar-widget-title">Request a Quote</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1.2rem' }}>
                                Get immediate pricing and stock availability for {formattedTitle}.
                            </p>
                            <Link to="/contact-us" className="primary-button" style={{ width: '100%' }}>
                                Contact Sales
                            </Link>
                        </div>

                        <div className="sidebar-widget">
                            <h3 className="sidebar-widget-title">Other Products</h3>
                            <ul className="sidebar-nav">
                                <li><Link to="/products/pipes-tubes">Pipes & Tubes</Link></li>
                                <li><Link to="/products/sheets-coils">Plates & Sheets</Link></li>
                                <li><Link to="/products/round-bars">Round Bars</Link></li>
                                <li><Link to="/products/wires">Wires</Link></li>
                                <li><Link to="/products/flanges">Flanges</Link></li>
                                <li><Link to="/products/forged-fittings">Forged Fittings</Link></li>
                                <li><Link to="/products/buttweld-fittings">Buttweld Fittings</Link></li>
                                <li><Link to="/products/fasteners">Fasteners</Link></li>
                                <li><Link to="/products/hollow-sections">Hollow Sections</Link></li>
                            </ul>
                        </div>
                        
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
    )
}

import { useParams, Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'

export function ProductDetailPage() {
    const { id } = useParams()

    // Format "stainless-steel-304-pipes-tubes" -> "Stainless Steel 304 Pipes Tubes"
    const formattedTitle = id
        ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : 'Product Details'
    
    // Some basic conditional logic to show different images based on title keywords
    let heroImage = '/assets/home/pipes-tubes.webp';
    if (id?.includes('flanges')) heroImage = '/assets/home/product-6.webp';
    else if (id?.includes('fastener')) heroImage = '/assets/home/product-7.webp';
    else if (id?.includes('round-bar')) heroImage = '/assets/home/round-bars.webp';
    else if (id?.includes('sheet') || id?.includes('plate')) heroImage = '/assets/home/sheets-coils.webp';
    else if (id?.includes('wire')) heroImage = '/assets/home/wires.webp';

    return (
        <div className="page-stack">
            <Seo
                title={`${formattedTitle} | Vedantara Metal & Alloys`}
                description={`Premium ${formattedTitle} manufactured and supplied globally by Vedantara Metal & Alloys.`}
                path={`/products/${id}`}
            />
            <PageHero
                eyebrow="Product Details"
                title={formattedTitle}
                description={`Comprehensive specifications, grades, and dimensions for ${formattedTitle}.`}
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
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
                            <h2>{formattedTitle} Manufacturer, Supplier & Exporter</h2>
                            <p>
                                Vedantara Metal & Alloys is a leading manufacturer, supplier, and exporter of high-quality <strong>{formattedTitle}</strong>. 
                                We are committed to providing premium quality products that adhere to national and international quality standards. 
                                Our {formattedTitle} are manufactured using the finest grade raw materials and advanced machinery under the strict supervision of our experienced professionals.
                            </p>
                            <p>
                                These {formattedTitle} are widely demanded across various industries such as Oil & Gas, Petrochemicals, Power Generation, Pharmaceuticals, 
                                and Marine due to their exceptional durability, high tensile strength, precise dimensions, and resistance to corrosion. 
                                We offer these in standard as well as customized sizes and specifications to meet the specific requirements of our global clients.
                            </p>
                        </div>

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
                                            <td>Single Random, Double Random & Cut Length</td>
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
                                <li><Link to="/pipes-tubes">Pipes & Tubes</Link></li>
                                <li><Link to="/sheets-coils">Plates & Sheets</Link></li>
                                <li><Link to="/round-bars">Round Bars</Link></li>
                                <li><Link to="/wires">Wires</Link></li>
                                <li><Link to="/flanges">Flanges</Link></li>
                                <li><Link to="/forged-fittings">Forged Fittings</Link></li>
                                <li><Link to="/buttweld-fittings">Buttweld Fittings</Link></li>
                                <li><Link to="/fasteners">Fasteners</Link></li>
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

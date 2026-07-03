import { Link } from 'react-router-dom'
import { contactDetails } from '../data/site'
import { products } from '../data/products'

const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Products', path: '/products' },
    { label: 'Quality', path: '/quality-policy' },
    { label: 'Contact Us', path: '/contact-us' },
]

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <section className="footer-brand">
                    <img src="/images/logo-transparent.webp" alt="Vedantara Metal and Alloys Pvt Ltd" />
                    <p>Titanium and stainless steel supply across industrial and export markets.</p>
                </section>

                <section>
                    <h3>Quick Link</h3>
                    <ul className="footer-links">
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                                <Link to={link.path}>› {link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h3>Our Products</h3>
                    <ul className="footer-links">
                        {products.map((product) => (
                            <li key={product.slug}>
                                <Link to={product.slug}>› {product.name}</Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h3>Titanium</h3>
                    <ul className="footer-links">
                        <li><Link to="/pipes-tubes">› Titanium Pipes &amp; Tubes</Link></li>
                        <li><Link to="/round-bars">› Titanium Round Bars</Link></li>
                        <li><Link to="/sheets-coils">› Titanium Sheets &amp; Coils</Link></li>
                        <li><Link to="/wires">› Titanium Wires</Link></li>
                    </ul>
                </section>

                <section>
                    <h3>Contact Us</h3>
                    <address className="footer-contact">
                        <a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a>
                        <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                        <span>{contactDetails.address}</span>
                    </address>
                </section>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>© 2026 All Right Reserved By Vedantara Metal &amp; Alloys Pvt Ltd</p>
                </div>
            </div>
        </footer>
    )
}

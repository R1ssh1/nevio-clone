import { NavLink } from 'react-router-dom'
import { navigation } from '../data/site'
import { products } from '../data/products'
import { useEffect, useState } from "react"
export function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <header className={`site-header ${scrolled ? "scrolled" : ""}`}>            <div className={`top-bar ${scrolled ? "hidden" : ""}`}>
            <div className="container top-bar-inner">
                <span className="top-bar-link">
                    <span className="top-bar-icon top-bar-icon--location" aria-hidden="true" />
                    Mumbai, Maharashtra, India
                </span>

                <div className="top-right">
                    <a href="mailto:info@vedantarametal.com">
                        <span className="top-bar-icon top-bar-icon--mail" aria-hidden="true" />
                        info@vedantarametal.com
                    </a>

                    <a href="tel:+919999999999">
                        <span className="top-bar-icon top-bar-icon--phone" aria-hidden="true" />
                        +91 99999 99999
                    </a>
                </div>
            </div>
        </div>

            <div className="container header-inner">
                <NavLink to="/" className="brand" aria-label="Vedantara Metal and Alloys Pvt Ltd home">
                    <img src="/images/symbol.webp" alt="" className="brand-symbol" aria-hidden="true" />
                    <img
                        src="/images/text.webp"
                        alt="Vedantara Metal and Alloys Pvt Ltd"
                        className="brand-wordmark"
                    />
                </NavLink>

                <div className="header-actions">
                    <nav className="nav" aria-label="Primary">
                        {navigation.map((item) => {
                            if (item.label === 'Products') {
                                return (
                                    <div key={item.label} className="dropdown">
                                        <button
                                            className="dropdown-trigger"
                                            type="button"
                                            aria-haspopup="true"
                                        >
                                            <button
                                                className="dropdown-trigger"
                                                type="button"
                                                aria-haspopup="true"
                                            >
                                                Products
                                                <span className="dropdown-arrow">▾</span>
                                            </button>
                                        </button>

                                        <div className="dropdown-menu">
                                            {products.map((product) => (
                                                <NavLink
                                                    key={product.slug}
                                                    to={product.slug}
                                                    className="dropdown-item"
                                                >
                                                    {product.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <NavLink
                                    key={item.label}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active' : 'nav-link'
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            )
                        })}
                    </nav>

                    <NavLink
                        to="/contact-us?subject=Request%20for%20Quotation"
                        className="quote-button"
                    >
                        GET A QUOTE
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

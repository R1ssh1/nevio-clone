import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../data/site'
import { products } from '../data/products'

export function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const location = useLocation()

    // Close dropdown whenever the route changes (e.g. user clicks Products link)
    useEffect(() => {
        setDropdownOpen(false)
    }, [location.pathname])

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY
            setScrolled((prev) => {
                if (!prev && y > 80) return true   // enter scrolled state at 80px
                if (prev && y < 60) return false    // exit only after going back to 60px
                return prev
            })
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close with Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setDropdownOpen(false)
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
            <div className={`top-bar ${scrolled ? 'hidden' : ''}`}>
                <div className="container top-bar-inner">
                    <span className="top-bar-link">
                        <svg className="top-bar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        Mumbai, Maharashtra, India
                    </span>

                    <div className="top-right">
                        <a href="mailto:info@vedantarametal.com" className="top-bar-link">
                            <svg className="top-bar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            info@vedantarametal.com
                        </a>

                        <a href="tel:+919920850631" className="top-bar-link">
                            <svg className="top-bar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                            +91 99208 50631
                        </a>
                        <a href="https://wa.me/919920850631" target="_blank" rel="noreferrer" className="top-bar-link" style={{ color: '#25D366', marginLeft: '8px' }}>
                            <svg className="top-bar-icon" fill="currentColor" viewBox="0 0 24 24" width="16" height="16" style={{ marginRight: '4px' }}>
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <div className="container header-inner">
                <NavLink
                    to="/"
                    className="brand"
                    aria-label="Vedantara Metal and Alloys Pvt Ltd home"
                    onClick={(e) => {
                        if (location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                >
                    <img
                        src="/images/logo.webp"
                        alt="Vedantara Metal and Alloys Pvt Ltd"
                        className="brand-wordmark"
                    />
                </NavLink>

                <div className="header-actions">
                    <nav className="nav" aria-label="Primary">
                        {navigation.map((item) => {
                            if (item.label === 'Products') {
                                return (
                                    <div
                                        key={item.label}
                                        ref={dropdownRef}
                                        className={`dropdown ${dropdownOpen ? 'is-open' : ''}`}
                                        onMouseEnter={() => setDropdownOpen(true)}
                                        onMouseLeave={() => setDropdownOpen(false)}
                                    >
                                        <NavLink
                                            to="/products"
                                            end={false}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'dropdown-trigger nav-link active'
                                                    : 'dropdown-trigger nav-link'
                                            }
                                            aria-haspopup="true"
                                            aria-expanded={dropdownOpen}
                                        >
                                            Products
                                            <span className="dropdown-arrow" aria-hidden="true">▾</span>
                                        </NavLink>

                                        <div className="dropdown-menu" role="menu">
                                            {products.map((product) => {
                                                const targetPath = product.slug.startsWith('/') ? product.slug : `/${product.slug}`;
                                                return (
                                                    <NavLink
                                                        key={product.slug}
                                                        to={product.slug}
                                                        role="menuitem"
                                                        className={({ isActive }) =>
                                                            isActive
                                                                ? 'dropdown-item active'
                                                                : 'dropdown-item'
                                                        }
                                                        onClick={(e) => {
                                                            if (location.pathname === targetPath) {
                                                                e.preventDefault();
                                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                                            }
                                                        }}
                                                    >
                                                        {product.name}
                                                    </NavLink>
                                                )
                                            })}
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
                                    onClick={(e) => {
                                        if (location.pathname === item.path) {
                                            e.preventDefault();
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }
                                    }}
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

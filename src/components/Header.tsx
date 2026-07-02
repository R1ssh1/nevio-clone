import { NavLink } from 'react-router-dom'
import { navigation } from '../data/site'

export function Header() {
    return (
        <header className="site-header">
            <div className="announcement-bar">
                <div className="container">
                    <span>Titanium and stainless steel products</span>
                    <span>Mumbai, India based manufacturer and exporter</span>
                </div>
            </div>
            <div className="container header-inner">
                <NavLink to="/" className="brand">
                    <span className="brand-mark">NSI</span>
                    <span>
                        <strong>Nevio Steel India</strong>
                        <small>Manufacturers, suppliers, exporters</small>
                    </span>
                </NavLink>

                <nav className="nav" aria-label="Primary">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.path}
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}
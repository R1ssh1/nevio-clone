import { Link } from 'react-router-dom'

/** SVG rotating ring badge — text orbits the ring, center shows bold "25+" */
function ExperienceBadge() {
    const radius = 52
    const cx = 70
    const cy = 70
    const text = '25+ YEARS OF EXPERIENCE · '

    return (
        <div className="experience-badge">
            <svg
                className="experience-badge__ring"
                viewBox="0 0 140 140"
                aria-hidden="true"
            >
                <defs>
                    <path
                        id="textCircle"
                        d={`M ${cx},${cy - radius} A ${radius},${radius} 0 1,1 ${cx - 0.001},${cy - radius}`}
                    />
                </defs>
                {/* Outer decorative ring */}
                <circle cx={cx} cy={cy} r={64} fill="none" stroke="rgba(11,35,65,0.1)" strokeWidth="1.5" />
                <circle cx={cx} cy={cy} r={radius} fill="none" stroke="rgba(11,35,65,0.06)" strokeWidth="1" strokeDasharray="3 5" />
                {/* Rotating text */}
                <text
                    fontSize="10.2"
                    fontWeight="700"
                    letterSpacing="2.2"
                    fill="#0b2341"
                    fontFamily="Inter, sans-serif"
                >
                    <textPath href="#textCircle" startOffset="0%">
                        {text}{text}
                    </textPath>
                </text>
            </svg>
            {/* Center content — counter-rotates so it stays upright */}
            <div className="experience-badge__center">
                <strong>25+</strong>
                <span>Years</span>
            </div>
        </div>
    )
}

export function AboutSection() {
    return (
        <section className="about-section">
            <div className="container about-grid">
                <div className="about-gallery">
                    <img
                        src="/assets/home/about-media-1.webp"
                        className="about-img about-img-left"
                        alt="Steel manufacturing"
                    />
                    <img
                        src="/assets/home/about-media-2.webp"
                        className="about-img about-img-top"
                        alt="Stainless steel products"
                    />
                    <img
                        src="/assets/home/about-media-3.webp"
                        className="about-img about-img-bottom"
                        alt="Quality inspection"
                    />
                    <ExperienceBadge />
                </div>

                <div className="about-content">
                    <p className="section-eyebrow">About Us</p>

                    <h2>
                        Globally Trusted Supplier Of Titanium &amp;
                        Stainless Steel Products
                    </h2>

                    <p>
                        At Vedantara Metal &amp; Alloys, we take pride in being one of India's
                        leading manufacturers, suppliers and exporters of Titanium and
                        Stainless Steel products.
                    </p>

                    <div className="about-features">
                        {[
                            'High Quality Materials',
                            'Worldwide Shipping',
                            'Latest Technology Equipment',
                            'Assured Quality',
                        ].map((feat) => (
                            <div className="feature-item" key={feat}>
                                <span className="feature-icon">✓</span>
                                <span>{feat}</span>
                            </div>
                        ))}
                    </div>

                    <Link to="/about-us" className="primary-button">
                        More About Us
                    </Link>
                </div>
            </div>
        </section>
    )
}
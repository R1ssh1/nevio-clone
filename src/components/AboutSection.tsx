import { Link } from "react-router-dom";

export function AboutSection() {
    return (
        <section className="about-section">

            <div className="container about-grid">

                <div className="about-gallery">

                    <img
                        src="/assets/home/about-media-1.webp"
                        className="about-img about-img-left"
                        alt=""
                    />

                    <img
                        src="/assets/home/about-media-2.webp"
                        className="about-img about-img-top"
                        alt=""
                    />

                    <img
                        src="/assets/home/about-media-3.webp"
                        className="about-img about-img-bottom"
                        alt=""
                    />

                    <div className="experience-badge">

                        <div className="badge-inner">

                            <strong>25+</strong>

                            <span>Years Experience</span>

                        </div>

                    </div>

                </div>

                <div className="about-content">

                    <p className="section-eyebrow">
                        About Us
                    </p>

                    <h2>
                        Globally Trusted Supplier Of Titanium &
                        Stainless Steel Products
                    </h2>

                    <p>
                        At Vedantara Metal & Alloys, we take pride in being one of India's
                        leading manufacturers, suppliers and exporters of Titanium and
                        Stainless Steel products.
                    </p>

                    <div className="about-features">
                        <div className="feature-item">

                            <span className="feature-icon">✓</span>

                            <span>High Quality Materials</span>

                        </div>

                        <div className="feature-item">

                            <span className="feature-icon">✓</span>

                            <span>Worldwide Shipping</span>

                        </div>

                        <div className="feature-item">

                            <span className="feature-icon">✓</span>

                            <span>Latest Technology Equipment</span>

                        </div>

                        <div className="feature-item">

                            <span className="feature-icon">✓</span>

                            <span>Assured Quality</span>

                        </div>

                    </div>

                    <Link
                        to="/about-us"
                        className="primary-button"
                    >
                        More About Us
                    </Link>

                </div>

            </div>

        </section>
    );
}
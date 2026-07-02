import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'

export function AboutPage() {
    return (
        <div className="page-stack">
            <Seo
                title={pageMeta.about.title}
                description={pageMeta.about.description}
                path={pageMeta.about.path}
            />
            <PageHero
                eyebrow="About Us"
                title="About Us"
                description="At Nevio Steel India, we take pride in being one of the most reliable manufacturers, suppliers, and exporters of titanium and stainless steel in the global market. Headquartered in Mumbai, India, we are an ISO 13485-2016 certified company with a strong reputation for delivering quality products backed by professional service and technical excellence."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>About Us</span>
                    </>
                }
            />

            <section className="container section-grid section-grid--about">
                <div className="about-gallery">
                    <figure className="about-gallery__media about-gallery__media--tall">
                        <img src="/assets/home/about-media-3.webp" alt="Nevio Steel India about visual" />
                    </figure>
                    <figure className="about-gallery__media about-gallery__media--stacked">
                        <img src="/assets/home/about-media-1.webp" alt="Manufacturing visual" />
                    </figure>
                    <figure className="about-gallery__media about-gallery__media--stacked about-gallery__media--accent">
                        <img src="/assets/home/about-media-2.webp" alt="Steel product visual" />
                    </figure>
                    <div className="about-gallery__badge">
                        <strong>25</strong>
                        <span>Years of experience</span>
                    </div>
                </div>

                <div className="section-copy">
                    <p className="eyebrow">About Us</p>
                    <h2>Globally trusted supplier of steel pipes &amp; tubes.</h2>
                    <p>
                        At Nevio Steel India, we take pride in being one of the most reliable
                        manufacturers, suppliers, and exporters of Titanium and Stainless Steel in
                        the global market. Headquartered in Mumbai, India, we are an ISO 13485-2016
                        certified company with a strong reputation for delivering quality products
                        backed by professional service and technical excellence.
                    </p>
                    <ul className="feature-list">
                        <li>High-Quality Materials</li>
                        <li>Worldwide Shipping</li>
                        <li>Latest Technology Equipment</li>
                        <li>Assured Quality</li>
                    </ul>
                    <Link className="primary-link" to="/products">
                        More About Us
                    </Link>
                </div>
            </section>

            <section className="container page-content-grid page-content-grid--two">
                <article className="info-card">
                    <h2>What visitors should understand</h2>
                    <p>
                        The page now explains who the company is, what it supplies, and why it is a
                        dependable export-focused supplier.
                    </p>
                </article>
                <article className="info-card">
                    <h2>Next content gap</h2>
                    <p>
                        The remaining page content can be extended later with the working process,
                        vision, and mission sections from the export.
                    </p>
                </article>
            </section>
        </div>
    )
}
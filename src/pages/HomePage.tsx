import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'
import {
    homepageAboutCopy,
    homepageBannerSlides,
    homepageIndustryIntro,
    homepageStats,
    homepageWhyChooseUs,
    industryCards,
    productCards,
} from '../data/site'

export function HomePage() {
    const bannerRef = useRef<HTMLDivElement | null>(null)
    const [activeSlide, setActiveSlide] = useState(0)

    const slideCount = homepageBannerSlides.length

    const slideOffsets = useMemo(() => homepageBannerSlides.map((_, index) => index), [])

    useEffect(() => {
        const track = bannerRef.current

        if (!track) {
            return
        }

        const updateActiveSlide = () => {
            const nextIndex = Math.round(track.scrollLeft / track.clientWidth)
            setActiveSlide(Math.max(0, Math.min(nextIndex, slideCount - 1)))
        }

        updateActiveSlide()
        track.addEventListener('scroll', updateActiveSlide, { passive: true })

        return () => track.removeEventListener('scroll', updateActiveSlide)
    }, [slideCount])

    const scrollToSlide = (index: number) => {
        const track = bannerRef.current

        if (!track) {
            return
        }

        const nextIndex = Math.max(0, Math.min(index, slideCount - 1))
        track.scrollTo({ left: nextIndex * track.clientWidth, behavior: 'smooth' })
        setActiveSlide(nextIndex)
    }

    const moveBanner = (direction: -1 | 1) => {
        scrollToSlide(activeSlide + direction)
    }

    return (
        <div className="home-page">
            <Seo
                title={pageMeta.home.title}
                description={pageMeta.home.description}
                path={pageMeta.home.path}
            />
            <section className="hero-banner" aria-label="Homepage banner">
                <button
                    className="hero-banner__arrow hero-banner__arrow--prev"
                    type="button"
                    onClick={() => moveBanner(-1)}
                    aria-label="Previous banner slide"
                    disabled={activeSlide === 0}
                >
                    <span aria-hidden="true">‹</span>
                </button>

                <div className="hero-banner__viewport" ref={bannerRef}>
                    {homepageBannerSlides.map((slide, index) => (
                        <article
                            className={
                                index === activeSlide
                                    ? 'hero-banner__slide hero-banner__slide--active'
                                    : 'hero-banner__slide'
                            }
                            key={slide.title}
                            style={{ backgroundImage: `url(${slide.image})` }}
                            aria-hidden={index !== activeSlide}
                        >
                            <div className="hero-banner__copy">
                                <p className="eyebrow hero-banner__eyebrow">{slide.eyebrow}</p>
                                <h1>{slide.title}</h1>
                                <p className="hero-banner__text">{slide.description}</p>
                                <div className="hero-actions">
                                    <Link className="secondary-button secondary-button--dark" to={slide.primaryPath}>
                                        {slide.primaryLabel}
                                    </Link>
                                    <Link className="primary-button" to={slide.secondaryPath}>
                                        {slide.secondaryLabel}
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <button
                    className="hero-banner__arrow hero-banner__arrow--next"
                    type="button"
                    onClick={() => moveBanner(1)}
                    aria-label="Next banner slide"
                    disabled={activeSlide === slideCount - 1}
                >
                    <span aria-hidden="true">›</span>
                </button>

                <div className="hero-banner__pagination" aria-label="Banner slides">
                    <span className="hero-banner__fraction">
                        <strong>{String(activeSlide + 1).padStart(2, '0')}</strong>
                        <span>/</span>
                        <span>{String(slideCount).padStart(2, '0')}</span>
                    </span>
                    <div className="hero-banner__dots">
                        {slideOffsets.map((index) => (
                            <button
                                key={index}
                                className={index === activeSlide ? 'hero-banner__dot is-active' : 'hero-banner__dot'}
                                type="button"
                                onClick={() => scrollToSlide(index)}
                                aria-label={`Go to banner slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-block container section-grid section-grid--about">
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
                    <h2>Globally trusted supplier of steel pipes and tubes.</h2>
                    <p>{homepageAboutCopy}</p>
                    <ul className="feature-list">
                        <li>High-quality materials</li>
                        <li>Worldwide shipping</li>
                        <li>Latest technology equipment</li>
                        <li>Assured quality</li>
                    </ul>
                    <Link className="primary-link" to="/about-us">
                        More About Us
                    </Link>
                </div>
            </section>

            <section className="section-block section-block--products">
                <div className="container section-heading">
                    <p className="eyebrow">Our Products</p>
                    <h2>Specialist &amp; India’s largest supplier and exporter of titanium &amp; stainless steel.</h2>
                </div>

                <div className="container product-grid">
                    {productCards.map((card) => (
                        <article className="product-card" key={card.title}>
                            <Link to={card.href} className="product-card__media">
                                <img src={card.image} alt={card.title} loading="lazy" />
                            </Link>
                            <div className="product-card__footer">
                                <h3>{card.title}</h3>
                                <span>View</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section-block quote-band">
                <div className="container quote-band__inner">
                    <h2>
                        High-quality titanium and stainless steel round bars, sheets, and plates
                        available in superior special steel grades for diverse application.
                    </h2>
                    <Link className="primary-button primary-button--light" to="/contact-us">
                        Get In Touch
                    </Link>
                </div>
            </section>

            <section className="section-block container section-grid section-grid--why">
                <div className="section-copy">
                    <p className="eyebrow">Why Choose Us</p>
                    <h2>
                        Nevio Steel India one of the huge stockist of titanium and stainless steel
                        pipes and tubes.
                    </h2>
                </div>

                <div className="why-grid">
                    {homepageWhyChooseUs.map(({ title, text }) => (
                        <article className="why-card" key={title}>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section-block stats-band">
                <div className="container stats-grid">
                    {homepageStats.map((stat) => (
                        <article className="stat-card" key={stat.label}>
                            <strong>{stat.value}</strong>
                            <span>{stat.label}</span>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section-block section-block--industry">
                <div className="container section-heading section-heading--centered">
                    <p className="eyebrow">Nevio Steel India</p>
                    <p className="section-intro">{homepageIndustryIntro}</p>
                </div>

                <div className="container industry-grid">
                    {industryCards.map((card) => (
                        <article className="industry-card" key={card.title}>
                            <img src={card.image} alt={card.title} loading="lazy" />
                            <h3>{card.title}</h3>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}
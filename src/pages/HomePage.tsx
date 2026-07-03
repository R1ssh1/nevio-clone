import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
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
import { AboutSection } from "../components/AboutSection";

export function HomePage() {
    const bannerRef = useRef<HTMLDivElement | null>(null)
    const [activeSlide, setActiveSlide] = useState(0)
    const [paused, setPaused] = useState(false)
    const [visibleSections, setVisibleSections] = useState<Set<string>>(() => new Set(['hero']))

    const slideCount = homepageBannerSlides.length
    const slideOffsets = useMemo(() => homepageBannerSlides.map((_, index) => index), [])

    const scrollToSlide = useCallback((index: number) => {
        const track = bannerRef.current

        if (!track) {
            return
        }

        const nextIndex = Math.max(0, Math.min(index, slideCount - 1))
        track.scrollTo({ left: nextIndex * track.clientWidth, behavior: 'smooth' })
        setActiveSlide(nextIndex)
    }, [slideCount])

    const moveBanner = useCallback((direction: -1 | 1) => {
        const nextIndex = (activeSlide + direction + slideCount) % slideCount
        scrollToSlide(nextIndex)
    }, [activeSlide, scrollToSlide, slideCount])

    useEffect(() => {
        if (paused) return

        const timer = setInterval(() => {
            moveBanner(1)
        }, 6000)

        return () => clearInterval(timer)
    }, [moveBanner, paused])

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return

                    const key = entry.target.getAttribute('data-reveal')
                    if (!key) return

                    setVisibleSections((current) => {
                        const next = new Set(current)
                        next.add(key)
                        return next
                    })
                })
            },
            { threshold: 0.16 },
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const handleBannerKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault()
            moveBanner(-1)
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault()
            moveBanner(1)
        }
    }

    const revealClass = (key: string) =>
        `reveal-section ${visibleSections.has(key) ? 'is-visible' : ''}`

    return (
        <div className="home-page">
            <Seo
                title={pageMeta.home.title}
                description={pageMeta.home.description}
                path={pageMeta.home.path}
            />
            <section
                className="hero-banner"
                aria-label="Homepage banner"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                onKeyDown={handleBannerKeyDown}
                tabIndex={0}
            >
                <button
                    className="hero-banner__arrow hero-banner__arrow--prev"
                    type="button"
                    onClick={() => moveBanner(-1)}
                    aria-label="Previous banner slide"
                >
                    <span aria-hidden="true">&lsaquo;</span>
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
                                    <Link className="primary-button" to={slide.primaryPath}>
                                        {slide.primaryLabel}
                                    </Link>
                                    <Link className="primary-button primary-button--ghost" to={slide.secondaryPath}>
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
                >
                    <span aria-hidden="true">&rsaquo;</span>
                </button>

                <div className="hero-banner__pagination" aria-label="Banner slides">
                    <span className="hero-banner__fraction">
                        <strong>{activeSlide + 1}</strong>
                        <span>/</span>
                        <span>{slideCount}</span>
                    </span>
                    <div className="hero-banner__progress" aria-hidden="true">
                        <span style={{ width: `${((activeSlide + 1) / slideCount) * 100}%` }} />
                    </div>
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

            <AboutSection />

            <section
                className={`section-block section-block--products ${revealClass('products')}`}
                data-reveal="products"
            >
                <div className="container section-heading">
                    <p className="eyebrow colour:'blue'">Our Products</p>
                    <h2>Specialist and India&apos;s trusted supplier and exporter of titanium and stainless steel.</h2>
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

            <section className={`section-block quote-band ${revealClass('quote')}`} data-reveal="quote">
                <div className="container quote-band__inner">
                    <h2>
                        High-quality titanium and stainless steel round bars, sheets, and plates
                        available in superior special steel grades for diverse application.
                    </h2>
                    <Link className="primary-button primary-button--light" to="/contact-us?subject=Request%20for%20Quotation">
                        Get In Touch
                    </Link>
                </div>
            </section>

            <section
                className={`section-block container section-grid section-grid--why ${revealClass('why')}`}
                data-reveal="why"
            >
                <div className="section-copy">
                    <p className="eyebrow">Why Choose Us</p>
                    <h2>
                        Vedantara Metal and Alloys is one of the major stockists of titanium and stainless steel
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

            <section className={`section-block stats-band ${revealClass('stats')}`} data-reveal="stats">
                <div className="container stats-grid">
                    {homepageStats.map((stat) => (
                        <article className="stat-card" key={stat.label}>
                            <strong>{stat.value}</strong>
                            <span>{stat.label}</span>
                        </article>
                    ))}
                </div>
            </section>

            <section
                className={`section-block section-block--industry ${revealClass('industry')}`}
                data-reveal="industry"
            >
                <div className="container section-heading section-heading--centered">
                    <p className="eyebrow">Vedantara Metal and Alloys</p>
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

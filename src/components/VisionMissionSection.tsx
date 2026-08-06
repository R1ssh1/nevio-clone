import { useEffect, useRef, useState } from 'react'

const VisionIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
)

const MissionIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
)

export function VisionMissionSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.16 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className={`section-block vm-section ${isVisible ? 'vm-section--visible' : ''}`}>
            <div className="container vm-grid">
                <div className="vm-visual">
                    <img src="/assets/home/about-media-1.webp" alt="Vedantara Metal & Alloys Pvt Ltd" loading="lazy" />
                    <div className="vm-visual-overlay" />
                    <div className="vm-visual-badge">
                        <strong>Driven by</strong>
                        <span>Excellence</span>
                    </div>
                </div>

                <div className="vm-content">
                    <p className="eyebrow">Our Vision & Mission</p>
                    <h2>Shaping the Future of Metal Solutions</h2>

                    <div className={`vm-cards ${isVisible ? 'vm-cards--visible' : ''}`}>
                        <article className="vm-card" style={{ transitionDelay: '0ms' }}>
                            <div className="vm-card__icon">
                                <VisionIcon />
                            </div>
                            <div className="vm-card__text">
                                <h3>Our Vision</h3>
                                <p>
                                    To be a globally recognized leader in industrial metal and stainless steel solutions,
                                    driving innovation and sustainability in every product we deliver across industries worldwide.
                                </p>
                            </div>
                        </article>

                        <article className="vm-card" style={{ transitionDelay: '150ms' }}>
                            <div className="vm-card__icon">
                                <MissionIcon />
                            </div>
                            <div className="vm-card__text">
                                <h3>Our Mission</h3>
                                <p>
                                    At Vedantara Metal & Alloys Pvt Ltd, our mission is to partner with our clients,
                                    industry, and community at large for delivering premium-grade metal solutions
                                    that drive sustainability, quality, and growth.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

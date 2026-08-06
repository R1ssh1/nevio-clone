import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { homepageWhyChooseUs } from '../data/site'
import { CountUp } from './CountUp'

function WhyCard({ data, index, inView }: { data: any, index: number, inView: boolean }) {
    const cardRef = useRef<HTMLElement>(null)

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        cardRef.current.style.setProperty('--mouse-x', `${x}px`)
        cardRef.current.style.setProperty('--mouse-y', `${y}px`)
    }

    return (
        <article
            ref={cardRef}
            className={`why-card animated-entrance ${inView ? 'is-visible' : ''}`}
            onMouseMove={handleMouseMove}
            style={{ animationDelay: `${index * 120}ms` }}
        >
            <div className="why-card__spotlight" />
            <div className="why-card__content">
                <div className="why-card__icon" dangerouslySetInnerHTML={{ __html: data.icon }} />
                <div className="why-card__metric">
                    {inView && <CountUp endString={data.metric.toString()} />}
                    <span className="why-card__suffix">{data.suffix}</span>
                </div>
                <h3>{data.title}</h3>
                <p>{data.text}</p>
            </div>
        </article>
    )
}

export function WhyChooseUsSection() {
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="section-block container why-choose-us-section"
        >
            <div className="why-background-accent">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" opacity="0.12" fill="url(#grad)" />
                    <defs>
                        <radialGradient id="grad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="var(--orange)" />
                            <stop offset="100%" stopColor="var(--navy)" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            <div className="section-grid section-grid--why" style={{ position: 'relative', zIndex: 2 }}>
                <div className="why-hero-card">
                    <div className="why-hero-card__bg">
                        {/* Rendering a nice placeholder manufacturing image native to your assets */}
                        <img src="/assets/home/product-6.webp" alt="Industrial Metal and Stainless Steel Pipes" loading="lazy" />
                    </div>

                    <p className="eyebrow why-hero-card__eyebrow">Why Choose Us</p>

                    <div className="why-hero-card__content">
                        <h2>
                            Vedantara Metal and Alloys Pvt Ltd is one of the major stockists of industrial metal and stainless steel
                            pipes and tubes.
                        </h2>
                        <p>
                            We supply premium-grade stainless steel, industrial metal, duplex and nickel alloy products to
                            industries across India, delivering consistent quality, competitive pricing and dependable
                            service.
                        </p>
                    </div>
                </div>

                <div className="why-grid">
                    {homepageWhyChooseUs.map((card, index) => (
                        <WhyCard key={card.title} data={card} index={index} inView={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    )
}

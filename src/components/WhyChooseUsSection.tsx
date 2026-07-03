import { useEffect, useRef, useState } from 'react'
import { homepageWhyChooseUs } from '../data/site'

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
            className={`section-block container section-grid section-grid--why reveal-section ${isVisible ? 'is-visible' : ''}`}
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
    )
}

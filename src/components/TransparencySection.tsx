import { useEffect, useRef, useState } from 'react'

export function TransparencySection() {
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
        <section ref={sectionRef} className={`section-block transparency-section ${isVisible ? 'transparency-section--visible' : ''}`}>
            <div className="transparency-bg">
                <img src="/assets/home/product-7.webp" alt="" loading="lazy" />
            </div>
            <div className="transparency-overlay" />

            <div className="container transparency-inner">
                <div className="transparency-content">
                    <p className="eyebrow">Transparency</p>
                    <h2>Transparency Brings in Customer Trust</h2>
                    <p className="transparency-sub">
                        Adhering to our responsibility towards consumers, we bridge the gap of information exchange.
                    </p>
                    <div className="transparency-divider" />
                    <p className="transparency-body">
                        Vedantara Metal & Alloys Pvt Ltd is committed to operating processes and conducting
                        marketing promotions in a transparent, responsible manner that shares product information
                        to customers with absolute transparency — both as per regulatory requirements specific to
                        certain geographies and as per voluntary schemes.
                    </p>
                </div>
            </div>
        </section>
    )
}

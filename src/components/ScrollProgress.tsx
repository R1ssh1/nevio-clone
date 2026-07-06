import { useEffect, useState } from 'react'

/** Circular SVG progress ring fixed at bottom-right. Click to scroll to top. */
export function ScrollProgress() {
    const [progress, setProgress] = useState(0)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            const clientHeight = document.documentElement.clientHeight || window.innerHeight;
            const docHeight = Math.max(0, scrollHeight - clientHeight);
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
            setProgress(Math.min(pct, 100))
            setVisible(scrollTop > 120)
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const size = 64
    const stroke = 4
    const radius = (size - stroke) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (progress / 100) * circumference

    // Interpolate colors based on progress (0 to 1)
    const p = progress / 100;
    const bgR = Math.round(255 - p * (255 - 0));
    const bgG = Math.round(255 - p * (255 - 51));
    const bgB = Math.round(255 - p * (255 - 142));
    const bgStyle = `rgb(${bgR}, ${bgG}, ${bgB})`;

    const textVal = Math.round(p * 255);
    const textStyle = `rgb(${textVal}, ${textVal}, ${textVal})`;

    return (
        <button
            className={`scroll-progress ${visible ? 'scroll-progress--visible' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            style={{
                backgroundColor: bgStyle,
                color: textStyle,
                
            }}
        >
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Track */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="rgba(11,35,65,0.12)"
                    strokeWidth={stroke}
                />
                {/* Progress arc */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="var(--orange)"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    style={{
                        transition: 'stroke-dashoffset 120ms linear'
                    }}
                />
            </svg>
            <div className="scroll-progress__content" aria-hidden="true">
                <span className="scroll-progress__icon">↑</span>
                <span className="scroll-progress__pct">{Math.round(progress)}%</span>
            </div>
        </button>
    )
}

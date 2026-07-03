import { useEffect, useState } from "react";

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);
    const [hoverText, setHoverText] = useState("");
    const [invert, setInvert] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const mouseOver = (e: Event) => {
            const target = e.target as HTMLElement;

            const isClickable = target.closest(
                'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"]), .feature-item, .quote-button, .about-image'
            );
            const isProduct = target.closest('.product-card');
            const isHeading = target.closest('h1, h2, h3, h4, h5, h6, .experience-badge');

            const isHeroBanner = target.closest('.hero-banner');
            const isHeroAction = target.closest('.hero-actions, .hero-banner__arrow, .hero-banner__dot');

            if (isHeroBanner && !isHeroAction) {
                setHovering(false);
                setHoverText("");
                setInvert(false);
                return;
            }

            if (isProduct) {
                setHovering(true);
                setHoverText("View");
                setInvert(false);
            } else if (isHeading) {
                setHovering(true);
                setHoverText("");
                setInvert(true);
            } else if (isClickable) {
                setHovering(true);
                setHoverText("Click");
                setInvert(false);
            } else {
                setHovering(false);
                setHoverText("");
                setInvert(false);
            }
        };

        window.addEventListener("mousemove", move);
        document.addEventListener("mouseover", mouseOver, true);

        return () => {
            window.removeEventListener("mousemove", move);
            document.removeEventListener("mouseover", mouseOver, true);
        };
    }, []);

    let className = "custom-cursor";
    if (hovering) className += " active";
    if (hoverText) {
        className += " has-text";
        if (hoverText === "Click") className += " click-mode";
    }
    if (invert) className += " invert-mode";

    return (
        <div
            className={className}
            style={{
                left: position.x,
                top: position.y
            }}
        >
            {hoverText && <span className="cursor-text">{hoverText}</span>}
        </div>
    );
}
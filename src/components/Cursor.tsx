import { useEffect, useState } from "react";

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const mouseOver = (e: Event) => {
            const target = e.target as HTMLElement;

            if (
                target.closest(
                    `
            a,
            button,
            input,
            textarea,
            select,
            img,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            span,
            li,
            strong,
            em,
            label,
            .product-card,
            .quote-button,
            .about-image,
            .hero-content,
            .feature-item
            `
                )
            ) {
                setHovering(true);
            } else {
                setHovering(false);
            }
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", mouseOver);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", mouseOver);
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${hovering ? "active" : ""}`}
            style={{
                left: position.x,
                top: position.y
            }}
        />
    );
}
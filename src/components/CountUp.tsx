import { useEffect, useRef, useState } from 'react';

export function CountUp({ endString }: { endString: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const animated = useRef(false);

    // Parse the number from the string e.g. "25+" -> 25, "+"
    const numMatch = endString.match(/(\d+)/);
    const endNum = numMatch ? parseInt(numMatch[1], 10) : 0;
    const suffix = endString.replace(/[0-9]/g, '');

    useEffect(() => {
        if (!ref.current || animated.current) return;

        let animationFrame: number;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (!animated.current) {
                        animated.current = true;

                        const duration = 2500;
                        const startTime = performance.now();

                        const update = (currentTime: number) => {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);

                            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                            setCount(Math.floor(easeProgress * endNum));

                            if (progress < 1) {
                                animationFrame = requestAnimationFrame(update);
                            }
                        };

                        animationFrame = requestAnimationFrame(update);
                    }
                } else {
                    // Reset animation state when leaving view
                    animated.current = false;
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [endNum]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

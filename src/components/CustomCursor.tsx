import { useEffect, useRef } from "react";

export const CustomCursor = () => {
    const cursorInnerRef = useRef<HTMLDivElement>(null);
    const cursorOuterRef = useRef<HTMLDivElement>(null);
    const mouseXRef = useRef(0);
    const mouseYRef = useRef(0);
    const innerXRef = useRef(0);
    const innerYRef = useRef(0);
    const outerXRef = useRef(0);
    const outerYRef = useRef(0);
    const isHoveringRef = useRef(false);
    const requestRef = useRef<number | null>(null);
    const hasMovedRef = useRef(false);

    useEffect(() => {
        const cursorInner = cursorInnerRef.current;
        const cursorOuter = cursorOuterRef.current;

        if (!cursorInner || !cursorOuter) return;

        let isActive = true;

        const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

        const handleMouseMove = (e: MouseEvent) => {
            mouseXRef.current = e.clientX;
            mouseYRef.current = e.clientY;
            hasMovedRef.current = true;

            // Check if hovering over interactive elements
            const target = e.target as HTMLElement;
            const hovering = !!target.closest("a, button, [role='button']");
            
            if (hovering !== isHoveringRef.current) {
                isHoveringRef.current = hovering;
                if (hovering) {
                    cursorOuter?.classList.add("cursor-hover");
                    cursorInner?.classList.add("cursor-hover");
                } else {
                    cursorOuter?.classList.remove("cursor-hover");
                    cursorInner?.classList.remove("cursor-hover");
                }
            }

            // Start animation on first move
            if (!requestRef.current) {
                animateCursor();
            }
        };

        const animateCursor = () => {
            if (!isActive) return;

            innerXRef.current = lerp(innerXRef.current, mouseXRef.current, 0.25);
            innerYRef.current = lerp(innerYRef.current, mouseYRef.current, 0.25);

            outerXRef.current = lerp(outerXRef.current, mouseXRef.current, 0.15);
            outerYRef.current = lerp(outerYRef.current, mouseYRef.current, 0.15);

            const innerScale = isHoveringRef.current ? 0.66 : 1;
            const outerScale = isHoveringRef.current ? 1.5 : 1;

            if (cursorInner) {
                cursorInner.style.transform = `translate3d(${innerXRef.current}px, ${innerYRef.current}px, 0) scale(${innerScale})`;
            }

            if (cursorOuter) {
                cursorOuter.style.transform = `translate3d(${outerXRef.current}px, ${outerYRef.current}px, 0) scale(${outerScale})`;
            }

            requestRef.current = requestAnimationFrame(animateCursor);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
            isActive = false;
            window.removeEventListener("mousemove", handleMouseMove);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    return (
        <>
            <div ref={cursorInnerRef} className="cursor-inner hidden md:block" />
            <div ref={cursorOuterRef} className="cursor-outer hidden md:block" />
        </>
    );
};



"use client";
import { useEffect, useRef } from "react";

export default function Text() {
    const ref1 = useRef<HTMLParagraphElement>(null);
    const ref2 = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        const el = ref1.current;
        const windowHeight = window.innerHeight;
        if (el) {
            const handleScroll = () => {
                const topEl = el.getBoundingClientRect().top;
                if (topEl <= windowHeight - 150) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                } else {
                    el.style.opacity = "0";
                    el.style.transform = "translateY(40px)";
                }
            };
            window.addEventListener("scroll", () => handleScroll());
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [ref1.current]);
    useEffect(() => {
        const el = ref2.current;
        const windowHeight = window.innerHeight;
        if (el) {
            const handleScroll = () => {
                const topEl = el.getBoundingClientRect().top;
                if (topEl < windowHeight - 100) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                } else {
                    el.style.opacity = "0";
                    el.style.transform = "translateY(40px)";
                }
            };
            window.addEventListener("scroll", () => handleScroll());
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [ref2.current]);
    return (
        <div className="absolute bottom-4 lg:bottom-20 flex flex-col items-center lg:items-start lg:px-10">
            <p
                ref={ref1}
                className="lg:max-w-[600px] font-shabb text-2xl bg-gradient-to-b from-neutral-900 to-neutral-400 inline-block text-transparent bg-clip-text transition-all duration-[1.2s] ease-out"
            >
                دوربین‌ها.
            </p>
            <p
                ref={ref2}
                className="lg:max-w-[600px] px-4 lg:px-0 mt-4 text-sm lg:text-[1rem] text-neutral-600 !leading-[26px] lg:!leading-8 transition-all duration-[1.2s] ease-out"
            >
                تخیل شما را ثبت می‌کنند. و هر چیز دیگر را
            </p>
        </div>
    );
}

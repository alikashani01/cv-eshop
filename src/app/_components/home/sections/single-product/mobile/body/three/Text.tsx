"use client";
import { useEffect, useRef } from "react";

export default function Text() {
    const ref = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        const el = ref.current;
        const windowHeight = window.innerHeight;
        if (el) {
            const handleScroll = () => {
                const topEl = el.getBoundingClientRect().top;
                if (topEl <= windowHeight - 50) {
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
    }, [ref.current]);
    return (
        <div>
            <p
                ref={ref}
                className="max-w-[600px] flex flex-col items-center gap-6 transition-all duration-[1.2s] ease-out"
            >
                <h1 className="text-4xl bg-gradient-to-r from-neutral-500 via-neutral-400 to-neutral-200 inline-block text-transparent bg-clip-text">
                    بازی.
                </h1>

                <h2 className="text-lg text-neutral-400">
                    در نوری کاملاً جدید.
                </h2>

                <p className="text-neutral-300 text-sm lg:text-[1rem] text-center">
                    تا ۲ برابر ردیابی پرتو سخت‌افزاری سریع‌تر نسبت به A17 Pro.
                </p>
            </p>
        </div>
    );
}

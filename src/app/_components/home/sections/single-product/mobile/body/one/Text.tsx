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
        <p
            ref={ref}
            className="max-w-[600px] text-neutral-400 text-sm lg:text-[.95rem] leading-7 transition-all duration-[1.2s] ease-out"
        >
            آیفون ۱۶ پرو برای هوش اپل ساخته شده است، سیستم هوش شخصی که به شما
            کمک می‌کند به‌راحتی بنویسید، خود را بیان کنید و کارهایتان را انجام
            دهید. با حفاظت‌های پیشگامانه از حریم خصوصی، این اطمینان را به شما
            می‌دهد که هیچ‌کس جز شما به داده‌هایتان دسترسی ندارد — حتی اپل.
        </p>
    );
}

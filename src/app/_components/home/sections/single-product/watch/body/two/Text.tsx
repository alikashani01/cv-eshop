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
                if (topEl <= windowHeight / 2 + 200) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                } else {
                    el.style.opacity = "0";
                    el.style.transform = "translateY(20px)";
                }
            };
            window.addEventListener("scroll", () => handleScroll());
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [ref.current]);
    return (
        <p
            ref={ref}
            className="max-w-[500px] mt-6 lg:m-0 font-shabt text-sm lg:text-[1rem] text-neutral-600 leading-7 transition-all duration-[1.2s] delay-[.5s] ease-out"
        >
            آنها از تیتانیوم درجه یک هوافضا ساخته شده اند که به درخشش آینه مانند
            صیقل داده شده است. با نسبت مقاومت به وزن قابل توجه تیتانیوم، سری ۱۰
            تقریباً ۲۰ درصد کمتر از سری ۹ در فولاد ضد زنگ وزن دارد و در عین حال
            بسیار بادوام است.
        </p>
    );
}

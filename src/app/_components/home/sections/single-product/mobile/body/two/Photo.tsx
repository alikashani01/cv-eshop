"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Photo() {
    const ref = useRef<HTMLImageElement>(null);
    useEffect(() => {
        const el = ref.current;
        const windowHeight = window.innerHeight;
        if (el) {
            const handleScroll = () => {
                const topEl = el.getBoundingClientRect().top;
                if (topEl <= windowHeight / 2 + 100) {
                    el.style.opacity = "1";
                    el.style.transform = "translateX(0)";
                } else {
                    el.style.opacity = "0";
                    el.style.transform = "translateX(100%)";
                }
            };
            window.addEventListener("scroll", () => handleScroll());
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [ref.current]);
    return (
        <Image
            ref={ref}
            width={4000}
            height={4000}
            src="https://res.cloudinary.com/phase-1/image/upload/v1726180122/PROJECTS/Store/iphone16/recycle__bjo9ezsrw6vm_large_2x_hzboue_fe8cff3.jpg"
            alt=""
            className="lg:w-full lg:h-[400px] object-contain transition-all duration-[1.5s]"
        />
    );
}

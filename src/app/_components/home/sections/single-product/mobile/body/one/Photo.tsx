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
                if (topEl <= windowHeight / 2) {
                    el.style.opacity = "1";
                } else {
                    el.style.opacity = "0";
                }
            };
            window.addEventListener("scroll", () => handleScroll());
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [ref.current]);
    return (
        <Image
            ref={ref}
            width={1000}
            height={1000}
            src="https://res.cloudinary.com/phase-1/image/upload/v1726178103/PROJECTS/Store/iphone16/apple_intelligence_endframe__ksa4clua0duu_large_2x_bugk81.jpg"
            alt=""
            className="lg:w-[600px] lg:h-[500px] object-contain transition-all duration-500"
        />
    );
}

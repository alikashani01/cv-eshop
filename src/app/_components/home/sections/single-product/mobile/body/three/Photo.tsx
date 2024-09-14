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
        <Image
            ref={ref}
            width={4000}
            height={4000}
            src="https://res.cloudinary.com/phase-1/image/upload/v1726178107/PROJECTS/Store/iphone16/gaming__efzeg2xv1ka6_large_2x_inlvca.jpg"
            alt=""
            className="w-full h-[300px] lg:h-[500px] object-contain transition-all duration-[1.5s]"
        />
    );
}

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
                if (topEl < windowHeight - 300) {
                    el.style.opacity = "1";
                    el.style.transform = "rotate(0)";
                } else {
                    el.style.opacity = "0";
                    el.style.transform = "rotate(-45deg)";
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
            src="https://res.cloudinary.com/phase-1/image/upload/v1726269972/PROJECTS/Store/iwatch/router_trade_in_full__e71hxescvtaq_large_2x_p6zsk3.jpg"
            alt=""
            className="lg:max-w-[50%] h-[400px] lg:h-[400px] object-contain transition-all duration-[1.5s]"
        />
    );
}

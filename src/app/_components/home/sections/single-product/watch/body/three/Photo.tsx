"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Photo() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        const windowHeight = window.innerHeight;
        const handleScroll = () => {
            if (el) {
                const topEl = el.getBoundingClientRect().top;
                if (topEl < windowHeight / 2) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                } else {
                    el.style.opacity = "0";
                    el.style.transform = "translateY(200px)";
                }
            }
        };

        // Initial check to set the initial state based on scroll position
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div ref={ref} className="transition-all duration-[2.5s]">
            <Image
                width={4000}
                height={4000}
                src="https://res.cloudinary.com/phase-1/image/upload/v1726324896/PROJECTS/Store/iwatch2/other_sports__gcemwwj4oguy_large_2x_u9jmox.png"
                alt=""
                className="w-full h-full object-cover"
            />
        </div>
    );
}

"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Media() {
    const ref = useRef<HTMLImageElement>(null);
    useEffect(() => {
        const el = ref.current;
        const windowHeight = window.innerHeight;
        if (el) {
            const handleScroll = () => {
                const topEl = el.getBoundingClientRect().top;
                if (topEl < windowHeight - 300) {
                    el.style.transform = "translateX(0)";
                } else {
                    el.style.transform = "translateX(100%)";
                }
            };
            handleScroll();

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [ref.current]);
    return (
        <Image
            ref={ref}
            width={4000}
            height={4000}
            src="https://res.cloudinary.com/phase-1/image/upload/v1726324784/PROJECTS/Store/iwatch2/workouts_apple_fitness__ffcjdmc5obu6_large_2x_hmj32v.png"
            alt=""
            className="lg:max-w-[600px] h-[300px] lg:h-[400px] object-cover transition-all duration-[2.5s]"
        />
    );
}

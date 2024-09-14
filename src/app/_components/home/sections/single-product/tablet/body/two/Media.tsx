"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

export default function Media() {
    const ref = useRef<HTMLImageElement>(null);
    useEffect(() => {
        const el = ref.current;
        const windowHeight = window.innerHeight;
        if (el) {
            const handleScroll = () => {
                const topEl = el.getBoundingClientRect().top;
                if (topEl < windowHeight / 2 + 100) {
                    el.style.transform =
                        "rotateX(0deg) rotateY(0deg) translateZ(0)";
                } else {
                    el.style.transform =
                        "rotateX(20deg) rotateY(20deg) translateZ(100px)";
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
            src="https://res.cloudinary.com/phase-1/image/upload/v1726331251/PROJECTS/Store/iPadPro/connectivity_endframe__caymxw78xf9e_large_2x_vrig8p.png"
            alt=""
            className={`${styles.element} lg:max-w-[60%] h-[300px] lg:h-dvh object-contain transition-all duration-[2.5s]`}
        />
    );
}

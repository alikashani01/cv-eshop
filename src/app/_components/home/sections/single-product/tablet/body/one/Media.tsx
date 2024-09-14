"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Media = () => {
    const ref = useRef<HTMLImageElement | null>(null);
    useGSAP(() => {
        const el = ref.current;
        if (el) {
            const animation = gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    toggleActions: "play pause resume pause",
                    start: "top top",
                    end: () => "+=" + el.offsetHeight / 2,
                    scrub: 1,
                    pin: true,
                },
                borderRadius: "20px",
                scale: 0.8,
                duration: 20,
            });

            ScrollTrigger.refresh();

            return () => animation.kill();
        }
    });
    return (
        <div className="h-[200vh] overflow-hidden flex justify-center">
            <Image
                ref={ref}
                width={1000}
                height={1000}
                src="https://res.cloudinary.com/phase-1/image/upload/v1726330584/PROJECTS/Store/iPadPro/hero__giio85wbt76m_large_2x_oy0bvq.jpg"
                alt=""
                className="h-dvh w-dvw object-cover"
            />
        </div>
    );
};

export default Media;

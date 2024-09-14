"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Photos from "./Photos";
import Info from "./info/Info";

gsap.registerPlugin(ScrollTrigger);

const HomePod = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useGSAP(() => {
        const el = ref.current;
        if (el) {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    toggleActions: "play pause resume pause",
                    start: "top top",
                    end: () => "+=" + el.offsetHeight * 4.5,
                    scrub: 1,
                    pin: true,
                },
            });
        }
    });
    return (
        <div className="*:bg-black hidden md:block">
            <div className="h-[20vh]"></div>
            <div
                ref={ref}
                className="relative flex items-center justify-center object-contain w-dvw h-dvh"
            >
                <Photos />

                <Info />
            </div>
            <div className="h-[20vh]"></div>
        </div>
    );
};

export default HomePod;

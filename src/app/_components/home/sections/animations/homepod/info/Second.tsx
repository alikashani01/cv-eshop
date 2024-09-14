"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
    const containerRef = useRef<HTMLParagraphElement | null>(null);
    const titleRef = useRef<HTMLParagraphElement | null>(null);
    const descriptionRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(() => {
        const containerEl = containerRef.current;
        if (containerEl) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerEl.parentElement?.parentElement,
                    start: () => "+=" + window.innerHeight * 3,
                    end: () => "+=" + window.innerHeight * 1.5,
                    scrub: true,
                },
            });
            tl.to(containerEl, {
                immediateRender: false,
            });
        }

        const titleEl = titleRef.current;
        if (titleEl) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: titleEl.parentElement?.parentElement,
                    start: () => "+=" + window.innerHeight * 2.5,
                    end: () => "+=" + window.innerHeight * 1.5,
                    scrub: true,
                },
            });
            tl.fromTo(
                titleEl,
                { opacity: 0, translateY: "25%" },
                {
                    opacity: 1,
                    translateY: "0%",
                    duration: 1,
                    color: "white",
                    immediateRender: false,
                }
            );
            tl.to(titleEl, {
                translateY: "-80%",
                duration: 1,
                color: "black",
                immediateRender: false,
            });
        }

        const descriptionEl = descriptionRef.current;
        if (descriptionEl) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: descriptionEl.parentElement?.parentElement,
                    start: () => "+=" + window.innerHeight * 2.5,
                    end: () => "+=" + window.innerHeight * 1.5,
                    scrub: true,
                },
            });
            tl.fromTo(
                descriptionEl,
                { opacity: 0, translateY: "25%" },
                {
                    opacity: 1,
                    translateY: "0%",
                    duration: 1,
                    color: "#999",
                    immediateRender: false,
                }
            );
            tl.to(descriptionEl, {
                translateY: "-50%",
                duration: 1,
                color: "black",
                immediateRender: false,
            });
        }
    });
    return (
        <div ref={containerRef} className="">
            <p
                ref={titleRef}
                className="opacity-0 text-4xl leading-[70px] font-shabb text-black"
            >
                آکوستیک را بهینه می کند در زمان واقعی.
            </p>
            <p
                ref={descriptionRef}
                className="opacity-0 leading-8 text-black mt-2 pl-[20%]"
            >
                سیلیکون اپل نوآوری های صوتی محاسباتی پیشرفته را در HomePod باز
                می کند. با استفاده از بازخورد سنسور سیستم، مدل‌های تنظیم پیچیده
                را در زمان واقعی اجرا می‌کند تا محدوده دینامیکی را حفظ کرده و
                عملکرد صوتی را به حداکثر برساند.
            </p>
        </div>
    );
};

export default Second;

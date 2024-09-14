"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const First = () => {
    const titleRef = useRef<HTMLParagraphElement | null>(null);
    const descriptionRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(() => {
        const titleEl = titleRef.current;
        if (titleEl) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: titleEl.parentElement?.parentElement,
                    start: "bottom top",
                    end: () => "+=" + window.innerHeight * 1.5,
                    scrub: true,
                },
            });
            tl.fromTo(
                titleEl,
                {
                    opacity: 0,
                    visibility: "hidden",
                    translateY: "25%",
                    color: "black",
                },
                {
                    opacity: 1,
                    visibility: "visible",
                    translateY: "0%",
                    duration: 1,
                    color: "white",
                    immediateRender: false,
                }
            );
            tl.to(titleEl, {
                translateY: "-100%",
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
                    start: "bottom top",
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
        <div className="">
            <p
                ref={titleRef}
                className="opacity-0 text-4xl leading-[70px] font-shabb text-black"
            >
                برای اتاق کوک شد.
            </p>
            <p
                ref={descriptionRef}
                className="opacity-0 leading-8 text-black mt-2 pl-[20%]"
            >
                با تشخیص اتاق، HomePod به طور خودکار موقعیت خود را در یک اتاق با
                استفاده از میکروفون خود برای گوش دادن به بازتاب صدا درک می کند.
                این صدا را بر اساس آن تنظیم می کند، بنابراین بدون توجه به جایی
                که قرار گرفته است، از بهترین تجربه شنیداری ممکن لذت خواهید برد.
            </p>
        </div>
    );
};

export default First;

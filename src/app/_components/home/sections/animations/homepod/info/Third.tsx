"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Third = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    useGSAP(() => {
        const el = ref.current;
        if (el) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el.parentElement?.parentElement,
                    start: () => "+=" + window.innerHeight * 3.5,
                    end: () => "+=" + window.innerHeight,
                    scrub: true,
                },
            });

            tl.fromTo(
                el,
                { opacity: 0, translateY: "25%" },
                {
                    opacity: 1,
                    translateY: "0%",
                    duration: 1,
                    color: "white",
                    immediateRender: false,
                }
            );
        }
    });
    return (
        <div
            ref={ref}
            className="w-full flex flex-col items-center opacity-0 text-black"
        >
            <div>
                <p className="text-6xl font-sfb">Apple HomePod</p>
                <p className="mt-1 text-neutral-400">اسپیکر خانگی اپل</p>
            </div>
            <div className="w-full flex items-center justify-center gap-10 mt-6">
                <Link href={`/product`}>جزییات بیشتر</Link>
                <Link
                    className="bg-blue-500 text-white p-[6px] px-5 rounded-full"
                    href={`/product`}
                >
                    خرید
                </Link>
            </div>
        </div>
    );
};

export default Third;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Photos = () => {
    const ref1 = useRef<HTMLDivElement | null>(null);
    const ref2 = useRef<HTMLDivElement | null>(null);
    const photo1Ref = useRef<HTMLImageElement | null>(null);
    const photo2Ref = useRef<HTMLImageElement | null>(null);
    useGSAP(() => {
        const el1 = ref1.current;
        const el2 = ref2.current;
        const photo1El = photo1Ref.current;
        const photo2El = photo2Ref.current;

        // PHOTO-CONTAINER-1:
        if (el1) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el1,
                    toggleActions: "play pause resume pause",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });
            tl.to(el1, {
                scale: 0.8,
                duration: 10,
            }).to(el1, {
                translateX: "25%",
                duration: 10,
            });
        }

        // PHOTO-CONTAINER-2:
        if (el2) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el2,
                    toggleActions: "play pause resume pause",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });
            tl.to(el2, {
                scale: 0.8,
                duration: 10,
            }).to(el2, {
                translateX: "25%",
                duration: 10,
            });
        }

        // IMAGE-1:
        if (photo1El) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: photo1El,
                    toggleActions: "play pause resume pause",
                    start: "bottom center",
                    end: "bottom top",
                    scrub: 1,
                },
            });
            tl.to(photo1El, {
                rotate: 0,
                duration: 10,
            });
        }

        // IMAGE-2:
        if (photo2El) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: photo2El,
                    toggleActions: "play pause resume pause",
                    start: "bottom center",
                    end: "bottom top",
                    scrub: 1,
                },
            });
            tl.to(photo2El, {
                opacity: 0,
                duration: 20,
            });
        }
    });
    return (
        <>
            <div
                ref={ref1}
                className="absolute w-full h-full flex items-center justify-center"
            >
                <Image
                    ref={photo1Ref}
                    width={1000}
                    height={1000}
                    src="/media/homepod/on.jpg"
                    alt=""
                    className="rotate-180 object-contain w-1/2 h-full"
                />
            </div>
            <div
                ref={ref2}
                className="absolute z-10 w-full h-full flex items-center justify-center"
            >
                <Image
                    ref={photo2Ref}
                    width={1000}
                    height={1000}
                    src="/media/homepod/off.jpg"
                    alt=""
                    className="object-contain w-1/2 h-full"
                />
            </div>
        </>
    );
};

export default Photos;

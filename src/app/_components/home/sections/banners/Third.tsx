import Link from "next/link";
import { useEffect, useRef } from "react";

const Third = ({ activeIndex }: { activeIndex: number }) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (activeIndex === 2) {
            ref.current?.play();
        } else {
            ref.current?.pause();
        }
    }, [activeIndex]);

    return (
        <Link href="" className="h-full">
            <video
                ref={ref}
                className="h-full w-full object-cover"
                src="https://res.cloudinary.com/phase-1/video/upload/v1726102834/PROJECTS/Store/Videos/Introducing_iPhone_16_Pro___Apple_fy1tes.mp4"
                autoPlay
                loop
                muted
                disablePictureInPicture
                webkit-playsinline
                playsInline
            />
            <div className="absolute top-6 left-6 h-full flex flex-col">
                <p className="font-sfblack uppercase text-2xl md:text-4xl text-neutral-50 bg-gradient-to-r from-[#56483F] via-[#D1614B] to-[#1B1B1B] bg-clip-text text-transparent">
                    iPhone 16 Pro Max
                </p>
                <div className="*:text-left py-2 *:py-2 *:text-white">
                    <div className="flex items-center justify-end gap-2 *:font-shabb">
                        <p className="text-3xl">قدرت.</p>
                        <p className="text-xl pt-1">زیبایی.</p>
                    </div>
                    <p className="text-lg pb-1">تیتانیوم</p>
                </div>
            </div>
        </Link>
    );
};

export default Third;

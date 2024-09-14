import Link from "next/link";
import { useEffect, useRef } from "react";

const Second = ({ activeIndex }: { activeIndex: number }) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (activeIndex === 1) {
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
                src="https://res.cloudinary.com/phase-1/video/upload/v1726100425/PROJECTS/Store/Videos/large_2x_j3dkue.mp4"
                autoPlay
                loop
                muted
                disablePictureInPicture
                webkit-playsinline
                playsInline
            />
            <div className="absolute top-6 left-6 h-full flex flex-col">
                <p className="font-sfblack uppercase text-2xl md:text-4xl text-neutral-50">
                    iPad Mini M4 2024
                </p>
                <div className="*:text-left py-2 *:py-[2px] *:text-white">
                    <p className="text-lg">سرگرمی</p>
                    <p className="text-2xl pt-1">نهایت تئاتر</p>
                    <p className="text-2xl pb-1">هر کجا که هستید</p>
                </div>
            </div>
        </Link>
    );
};

export default Second;

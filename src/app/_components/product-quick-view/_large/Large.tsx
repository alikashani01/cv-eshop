"use client";

import { Backdrop } from "@mui/material";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CloseButton from "../../_modules/close-button/CloseButton";
import Gallery from "../gallery/Gallery";
import Highlights from "../Highlights";
import Pricing from "../pricing/Pricing";
import { Context } from "../ProductQuickView";
import Specs from "../specs/Specs";

interface Props {
    open: boolean;
    handleOpen: () => void;
}

const Large = ({ open, handleOpen }: Props) => {
    const { name } = useContext(Context);

    const productName = name.fa.split(" ").join("-");

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return createPortal(
        <Backdrop
            className="z-50 w-dvw h-[100vh] backdrop-blur-xl md:backdrop-blur-sm"
            open={open}
        >
            <div
                className="fixed inset-0 w-full h-screen"
                onClick={handleOpen}
            />
            <div
                className={`w-auto hidden md:block fixed bottom-0 left-1/2 -translate-x-1/2 transition-all duration-500 bg-second-theme rounded-t-2xl overflow-hidden
                ${
                    open
                        ? "opacity-1 translate-y-0"
                        : "opacity-0 translate-y-full"
                }
                `}
            >
                <div className="hidden md:block relative bottom-0 z-50 w-[95vw] lg:w-[80vw] h-[95vh] bg-white rounded-2xl">
                    <div className="h-16 flex items-center justify-between px-6">
                        <CloseButton onClose={handleOpen} />
                    </div>
                    <div className="h-[calc(100%-64px)] *:h-full *:overflow-y-auto overflow-y-auto *:no-scrollbar flex *:px-4">
                        <div className="border-l border-neutral-100 min-w-[300px] max-w-[300px]">
                            <Gallery />
                            <Pricing />
                            <div>
                                <Link
                                    className="w-full justify-center bg-blue-600 text-white my-4 rounded-xl p-3"
                                    href={`${productName}/buy`}
                                >
                                    خرید
                                </Link>
                                <Link href={productName}>اطلاعات بیشتر</Link>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <Highlights />
                            <Specs />
                        </div>
                    </div>
                </div>
            </div>
        </Backdrop>,
        document.body
    );
};

export default Large;

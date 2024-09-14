"use client";

import MUIBackdrop from "@mui/material/Backdrop";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ModalIntercept({ children }: PropsWithChildren) {
    const [open, setOpen] = useState(false);
    const { back } = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        // setIsMounted(true);
        setOpen(true);
    }, []);
    // if (!isMounted) return null;
    return createPortal(
        <MUIBackdrop
            className="z-50 w-dvw h-[100vh] backdrop-blur-sm md:backdrop-blur-sm"
            open={open}
        >
            <div
                className="fixed inset-0 w-full h-screen"
                onClick={() => back()}
            />

            <div
                className={`fixed bottom-0 lg:top-1/2 left-1/2 z-50 w-full lg:w-[500px] -translate-x-1/2 lg:-translate-y-1/2 overflow-y-auto no-scrollbar transition-all duration-700 rounded-t-2xl lg:rounded-2xl
                ${
                    open
                        ? "translate-y-0 opacity-1"
                        : "translate-y-[100%] opacity-0"
                }
                `}
            >
                {children}
            </div>
        </MUIBackdrop>,
        document.body
    );
}

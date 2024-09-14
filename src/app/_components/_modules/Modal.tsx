import MUIBackdrop from "@mui/material/Backdrop";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    width?: string;
    bgColor?: string;
    title?: string;
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({
    width = "300px",
    bgColor = "#f5f5f7",
    children,
    title,
    open,
    onClose,
}: Props) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;
    return createPortal(
        <MUIBackdrop className="backdrop-blur-sm z-50" open={open}>
            <div className="fixed inset-0 w-full h-screen" onClick={onClose} />
            <div
                className={`md:hidden fixed bottom-0 left-0 w-full transition-all duration-300 p-[6px]
                ${open ? "translate-y-0" : "translate-y-[100%]"}
                `}
            >
                {children}
            </div>
            <div
                style={{ width, background: bgColor }}
                className="hidden md:block relative z-50 rounded-2xl bg-second-theme"
            >
                {title && (
                    <p className="flex items-center justify-center p-4 border-b border-neutral-200 text-neutral-600 text-[.95rem]">
                        {title}
                    </p>
                )}
                {children}
            </div>
        </MUIBackdrop>,
        document.body
    );
}

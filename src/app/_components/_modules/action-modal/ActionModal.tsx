import MUIBackdrop from "@mui/material/Backdrop";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    width?: string;
    bgColor?: string;
    children: ReactNode[];
    open: boolean;
    onClose: () => void;
}

export default function ActionModal({
    width = "300px",
    bgColor = "#f5f5f7",
    children,
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

            {/* Small */}
            <div
                className={`md:hidden fixed bottom-0 left-0 w-full transition-all duration-300 p-[6px]
                ${open ? "translate-y-0" : "translate-y-[100%]"}
                `}
            >
                <div className="bg-second-theme rounded-2xl">
                    <div className="min-h-14 flex flex-col items-center justify-center gap-1 p-4">
                        {children[0]}
                    </div>
                    {children[1]}
                </div>
                <button
                    className="w-full h-12 justify-center mt-[6px] bg-second-theme rounded-2xl"
                    onClick={onClose}
                >
                    لغو
                </button>
            </div>

            {/* Large */}
            <div
                style={{ width, background: bgColor }}
                className="hidden md:block relative z-50 rounded-2xl bg-second-theme"
            >
                <div>{children[0]}</div>
                <div className="h-14 flex *:flex-1">
                    {children[1]}
                    <button onClick={onClose}>لغو</button>
                </div>
            </div>
        </MUIBackdrop>,
        document.body
    );
}

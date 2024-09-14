"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const BackdropLarge = ({ isOpen, onClose, children }: Props) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return createPortal(
        <div
            className={`w-dvw h-screen fixed inset-0 z-50 bg-[#fff5] backdrop-blur-md transition-all duration-500
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
            `}
        >
            <div className="fixed inset-0 w-full h-screen" onClick={onClose} />
            {isOpen && (
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 w-auto">
                    {children}
                </div>
            )}
        </div>,
        document.body
    );
};

export default BackdropLarge;

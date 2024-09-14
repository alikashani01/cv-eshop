"use client";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
}

const Backdrop = ({ children, open, onClose }: Props) => {
    const pathname = usePathname();
    useEffect(() => {
        const eventHandler = () => onClose();
        document.addEventListener("scroll", eventHandler);
        return () => {
            document.removeEventListener("scroll", eventHandler);
        };
    }, [onClose]);
    useEffect(() => {
        onClose();
    }, [pathname]);
    const containerStyles = `bg-[#1a1a1a55] backdrop-blur-xl fixed top-0 z-30 right-0 w-full h-[100vh] transition-all duration-500 ${
        open ? "visible opacity-1" : "opacity-0 invisible"
    }`;
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return createPortal(
        <div className={containerStyles}>
            <div className="fixed inset-0 z-0" onClick={onClose} />
            {children}
        </div>,
        document.body
    );
};

export default Backdrop;

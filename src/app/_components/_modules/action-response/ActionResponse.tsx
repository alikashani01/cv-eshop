"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    success: boolean;
    error: string;
    message: string;
    reset: () => void;
}

const ActionResponse = ({ success, error, message, reset }: Props) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (success || error) {
            setOpen(true);
            const timer = setTimeout(() => {
                setOpen(false);
                reset();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [success, error, message, reset]);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return createPortal(
        <div
            className={`fixed top-0 z-[100]  right-0 w-full h-[100vh] transition-all duration-500 ${
                open ? "visible opacity-1" : "opacity-0 invisible"
            }`}
        >
            <div className="fixed inset-0 z-0" onClick={() => setOpen(false)} />
            <div
                className={`fixed z-40 left-0 top-0 w-full translate-y-[-100%] transition-[1s] p-2
                ${open ? "translate-y-[2px]" : "translate-y-[-100%]"}    
                `}
            >
                <div className="w-full md:w-[350px] h-12 bg-second-theme rounded-2xl flex items-center gap-2 justify-center p-2 md:mx-auto">
                    {success ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#00d166"
                            className="bi bi-check-circle-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                    ) : (
                        error && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#ff0030"
                                className="bi bi-x-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        )
                    )}
                    <p className="text-sm text-neutral-700 font-shabt">
                        {error ? error : message}
                    </p>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ActionResponse;

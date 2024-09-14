"use client";
import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { CircularProgress } from "@mui/material";
import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
    title: string;
    submitTitle: string;
    isLoading?: boolean;
    isSuccess?: boolean;
    isOpen: boolean;
    onClose: () => void;
    onSubmit: any;
}

export default function BackdropHeadless({
    children,
    title,
    submitTitle,
    isLoading,
    isSuccess,
    isOpen,
    onClose,
    onSubmit,
}: Props) {
    const cancelButtonRef = useRef(null);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        isSuccess && onClose();
    }, [isSuccess]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    return createPortal(
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-50"
                initialFocus={cancelButtonRef}
                onClose={onClose}
            >
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-dark-200 bg-opacity-75 backdrop-blur transition-opacity" />
                </TransitionChild>

                <div className="fixed inset-0 md:flex md:items-center md:justify-center z-10 md:w-screen overflow-y-auto">
                    <div className="flex items-end md:items-center justify-center text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel className="w-dvw md:w-auto absolute bottom-0 md:bottom-1/2 md:translate-y-1/2 transform overflow-hidden rounded-t-2xl md:rounded-2xl text-right transition-all flex items-end md:items-center md:justify-center md:bg-second-theme rounded-2xl md:border border-[#aaa2] md:drop-shadow-sm shadow-[#111]">
                                {/* Small */}
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        onSubmit();
                                    }}
                                    className="lg:hidden w-full p-1"
                                >
                                    <div className="max-h-[calc(100vh-80px)] bg-slate-800 rounded-2xl">
                                        <div className="sticky top-0 z-10 h-12 flex items-center justify-between bg-bg-white border-b border-slate-700 px-5">
                                            <p className="text-neutral-200 text-[.9rem]">
                                                {title}
                                            </p>
                                            <button
                                                type="button"
                                                className="text-sm text-white"
                                                onClick={onClose}
                                            >
                                                لغو
                                            </button>
                                        </div>
                                        {children}
                                    </div>
                                    <button
                                        className="w-full h-12 gap-2 bg-slate-800 text-white rounded-xl mt-1 disabled:bg-neutral-300"
                                        disabled={isLoading}
                                    >
                                        {isLoading && (
                                            <CircularProgress
                                                size={15}
                                                sx={{ color: "#007aff" }}
                                            />
                                        )}
                                        {submitTitle}
                                    </button>
                                </form>

                                {/* Large */}
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        onSubmit();
                                    }}
                                    className="hidden md:block bg-slate-800"
                                >
                                    <div className="sticky top-0 z-10 h-14 flex items-center justify-between px-5">
                                        <p className="text-neutral-200 text-[.9rem]">
                                            {title}
                                        </p>
                                        <button
                                            type="button"
                                            className="text-sm text-white"
                                            onClick={onClose}
                                        >
                                            لغو
                                        </button>
                                    </div>

                                    <div className="flex flex-col items-center justify-center">
                                        {children}
                                    </div>

                                    <div className="w-full h-14 gap-2 flex items-center justify-center">
                                        <button
                                            className="gap-2 bg-[#007fff] text-white text-sm p-[6px] px-4 rounded-xl disabled:bg-white"
                                            disabled={isLoading}
                                        >
                                            {isLoading && (
                                                <CircularProgress
                                                    size={15}
                                                    sx={{ color: "#007aff" }}
                                                />
                                            )}
                                            {submitTitle}
                                        </button>
                                    </div>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>,
        document.body
    );
}

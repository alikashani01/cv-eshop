"use client";
import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    isOpen: boolean;
    onClose: (value: boolean) => void;
    children: ReactNode;
}

export default function Backdrop({ isOpen, onClose, children }: Props) {
    const cancelButtonRef = useRef(null);
    const handleClose = () => onClose(false);
    const [isMounted, setIsMounted] = useState(false);

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
                onClose={handleClose}
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
                            enter="ease-out duration-500"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel className="w-dvw md:w-auto h-auto absolute bottom-0 md:bottom-1/2 md:translate-y-1/2 transform overflow-hidden rounded-t-2xl md:rounded-2xl bg-slate-800 drop-shadow-sm shadow-[#111] text-right transition-all flex items-end md:items-center md:justify-center">
                                {children}
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>,
        document.body
    );
}

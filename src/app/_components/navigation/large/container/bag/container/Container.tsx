"use client";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../../../_Context";

import Header from "./header/Header";
import List from "./list/List";
import useBagStore from "@/src/queries/order/bag/store";

export default function Container() {
    const { bagOpen, onOpenBag } = useContext(NavContext);

    const onClose = () => onOpenBag();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const items = useBagStore((s) => s.items);

    if (!isMounted) return null;
    return (
        <div
            className={`w-dvw h-screen fixed inset-0 z-50 transition-all duration-500
            ${bagOpen ? "opacity-100 visible" : "opacity-0 invisible"}
            `}
        >
            <div className="fixed inset-0 w-full h-screen" onClick={onClose} />

            <div
                className={`hidden lg:block absolute right-4 top-14 w-[350px] rounded-2xl bg-white shadow-md shadow-[#aaa8] transition-all duration-500
                    ${
                        bagOpen
                            ? "h-[calc(100vh-70px)] opacity-1 visible"
                            : "h-[50vh] opacity-0 invisible"
                    } 
                `}
            >
                <div className="h-full overflow-y-auto no-scrollbar">
                    {items.length === 0 ? (
                        <p className="flex items-center justify-center text-center mt-14 text-neutral-700 text-[.92rem]">
                            محصولی اضافه نکرده‌اید
                        </p>
                    ) : (
                        <>
                            <Header />
                            <List />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

"use client";
import { useContext } from "react";
import { ProductContext } from "../../../../_Context";
import Navigation from "./Navigation";

const Header = () => {
    const {
        name: { en: nameEn },
    } = useContext(ProductContext);
    return (
        <header className="h-12 flex items-center justify-between gap-[6px] px-4 lg:px-[8%] bg-[#ffffff55] backdrop-blur-xl">
            <Navigation />
            <p className="ltr font-sfreg text-neutral-600 tracking-[.5px]">
                {nameEn}
            </p>
        </header>
    );
};

export default Header;

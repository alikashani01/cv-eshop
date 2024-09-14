"use client";
import Save from "@/src/app/_components/Save";
import { useContext } from "react";
import { ProductContext } from "../../../_Context";
import Menu from "./Menu";
import Shopping from "./Shopping";

const Footer = () => {
    const { _id } = useContext(ProductContext);
    return (
        <div className="w-full h-12 fixed bottom-0 left-0 z-20 flex items-center justify-between px-4 bg-[#fff5] backdrop-blur-xl border-t border-[#eee6]">
            <Shopping />
            <div className="flex items-center gap-4">
                <Menu />
                <Save id={_id!} />
            </div>
        </div>
    );
};

export default Footer;

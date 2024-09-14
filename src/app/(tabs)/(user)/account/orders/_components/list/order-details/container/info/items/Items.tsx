"use client";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../Container";

const Items = () => {
    const { items } = useContext(Context);
    return (
        <ul className="grid grid-cols-1 gap-4 rounded-xl">
            {items?.map((item, index) => (
                <li
                    key={index}
                    className="bg-second-theme rounded-xl last:border-none py-2 text-left"
                >
                    <Image
                        width={1000}
                        height={1000}
                        src={item.photo}
                        alt=""
                        className="w-[100%] h-[80px] object-contain"
                    />

                    <p className="text-[.9rem] text-center mt-2 text-neutral-800 font-sfl tracking-[1px]">
                        {item.name}
                    </p>
                    <div className="flex items-center justify-between mt-2 *:h-8 gap-2 *:flex *:items-center px-4">
                        <div className="flex items-center gap-2">
                            <span
                                style={{ background: item.color.code }}
                                className="w-4 h-4 rounded-full block border border-neutral-200"
                            ></span>
                            <p className="text-[.8rem] text-neutral-800 text-right">
                                {item.color.fa}
                            </p>
                        </div>
                        {item.storage?.capacity && (
                            <div className="flex items-center gap-1 pt-[2px]">
                                <p className="tracking-[2px] text-neutral-800 pt-[.6px] text-[1.05rem]">
                                    {item.storage?.capacity}
                                </p>
                                <p className="text-[.75rem] text-neutral-500 font-shabt pt-[.8px]">
                                    {item.storage?.unit}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="mt-2 h-8 flex items-center justify-between  *:flex *:items-center px-4">
                        <div className="flex items-center gap-1">
                            <p className="text-neutral-800">
                                {convertEngToPer(item.quantity)}
                            </p>
                            <p className="text-[.7rem] text-neutral-500 font-shabt">
                                عدد
                            </p>
                        </div>
                        <div className="gap-1">
                            <p className="text-sm tracking-[2px] text-neutral-800">
                                {item.price.toLocaleString("fa")}
                            </p>
                            <p className="text-[.7rem] text-[#999] font-shabt">
                                تومان
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Items;

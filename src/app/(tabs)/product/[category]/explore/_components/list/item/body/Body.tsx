import Link from "next/link";
import { useContext } from "react";
import { Context } from "../Item";
import Photos from "./Photos";

const Body = () => {
    const { _id, name, colors, title } = useContext(Context);
    const href = title!.fa.split(" ").join("-");
    return (
        <div className="flex-col pt-3 px-2 h-[344px]">
            <Photos />

            <Link href={href} className="flex-col">
                <p className="h-[44px] mt-2 tracking-[.6px] font-sft text-center leading-5 text-[#666666] flex justify-center overflow-hidden">
                    {name.en}
                </p>
                <div className="flex items-center gap-2 mt-2">
                    {colors?.map((color) => (
                        <div
                            key={color.code}
                            style={{
                                background: color.code,
                            }}
                            className="w-[10px] h-[10px] rounded-full"
                        />
                    ))}
                </div>
            </Link>
        </div>
    );
};

export default Body;

import Link from "next/link";
import { useContext } from "react";
import { Context } from "../Item";
import Photos from "./Photos";

const Body = () => {
    const { _id, name, colors, category } = useContext(Context);
    return (
        <div className="flex-col pt-3 px-2 h-[304px]">
            <Photos />

            <Link
                href={`product/${category.en}/${name.fa.split(" ").join("-")}`}
                className="flex-col"
            >
                <p className="h-[44px] mt-2 tracking-[0px] font-sfl text-center leading-5 text-neutral-500 flex justify-center overflow-hidden">
                    {name.en}
                </p>
                <div className="flex items-center gap-2 mt-2">
                    {colors?.map((color) => (
                        <div
                            key={color.code}
                            style={{
                                background: color.code,
                            }}
                            className={`w-[10px] h-[10px] rounded-full`}
                        />
                    ))}
                </div>
            </Link>
        </div>
    );
};

export default Body;

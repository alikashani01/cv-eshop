"use client";
import { useContext } from "react";
import { ProductContext } from "../../../_Context";
import { Context } from "../../_Context";

const Colors = () => {
    const {
        onColor,
        data: {
            color: { code },
        },
    } = useContext(Context);
    const { colors } = useContext(ProductContext);
    return (
        <ul className="max-w-[400px] pt-6 lg:pt-4 mx-auto">
            <p className="mb-2 mr-1 text-neutral-700">
                رنگ مورد علاقتو انتخاب کن
            </p>
            {colors.map((color) => (
                <li
                    key={color.code}
                    className={`h-20 flex items-center justify-between gap-4 bg-second-theme border ${
                        color.code === code
                            ? "border-blue-500"
                            : "border-neutral-200"
                    } rounded-2xl mb-4 px-4 transition-all duration-500`}
                    onClick={() => onColor(color)}
                >
                    <div className="*:py-[1px]">
                        <p>{color.fa}</p>
                        <p className="uppercase font-sfl text-[.75rem] text-[#888] tracking-widest">
                            {color.en}
                        </p>
                    </div>

                    <span
                        style={{ background: color.code }}
                        className={`w-[50px] h-[50px] rounded-full block border border-neutral-100`}
                    ></span>
                </li>
            ))}
        </ul>
    );
};

export default Colors;

import Image from "next/image";
import { useContext } from "react";
import { ProductContext } from "../_Context";

const Compatibility = () => {
    const { compatibility } = useContext(ProductContext);
    return (
        compatibility?.length! > 0 && (
            <div>
                <p className="h-16 flex items-center justify-center text-neutral-600">
                    دستگاه‌های سازگار
                </p>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4">
                    {compatibility?.map((item, index) => (
                        <li
                            key={index}
                            className="flex flex-col items-center justify-center gap-3 py-4"
                        >
                            <Image
                                width={1000}
                                height={1000}
                                src={`/icons/product/${
                                    item === "لپتاپ"
                                        ? "laptop"
                                        : item === "تبلت"
                                        ? "tablet"
                                        : item === "موبایل"
                                        ? "mobile-display"
                                        : "console"
                                }.png`}
                                alt=""
                                className="w-[50px] md:w-20 h-[50px] md:h-20 object-contain"
                            />
                            <p className="text-sm text-neutral-600">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
};

export default Compatibility;

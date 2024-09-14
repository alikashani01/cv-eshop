import Image from "next/image";
import { useContext } from "react";
import { ProductContext } from "../../_Context";

const TopFeatures = () => {
    const { specs } = useContext(ProductContext);
    const containerStyles = "flex items-center pb-1 gap-2";
    const mainTitleStyles = "text-[.85rem] text-nuetral-400";
    return (
        specs?.proccessors?.cpu?.model && (
            <ul className="grid grid-cols-1">
                {specs?.proccessors?.cpu?.model && (
                    <li className="p-4 border-b border-neutral-200 last:border-none">
                        <div className={containerStyles}>
                            <Image
                                width={1000}
                                height={1000}
                                src="/icons/product/cpu.png"
                                alt=""
                                className="w-[30px] h-[30px] object-contain"
                            />
                            <div>
                                <p className={mainTitleStyles}>
                                    پردازنده مرکزی
                                </p>
                                <p className="text-[.8rem] font-sft tracking-[2px] text-neutral-500">
                                    CPU
                                </p>
                            </div>
                        </div>
                        <p className="font-sfr tracking-[1px] text-left">
                            {specs?.proccessors?.cpu?.model}
                        </p>
                    </li>
                )}
                {specs?.proccessors?.gpu?.model && (
                    <li className="py-3 px-4">
                        <div className={containerStyles}>
                            <Image
                                width={1000}
                                height={1000}
                                src="/icons/product/gpu.png"
                                alt=""
                                className="w-[30px] h-[30px] object-contain"
                            />
                            <div>
                                <p className={mainTitleStyles}>
                                    پردازنده گرافیکی
                                </p>
                                <p className="text-[.8rem] font-sft tracking-[2px] text-neutral-500">
                                    GPU
                                </p>
                            </div>
                        </div>
                        <p className="font-sfr tracking-[1px] text-left">
                            {specs?.proccessors?.gpu?.model}
                        </p>
                    </li>
                )}
            </ul>
        )
    );
};

export default TopFeatures;

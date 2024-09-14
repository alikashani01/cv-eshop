import Image from "next/image";
import { useContext } from "react";
import { ProductContext } from "../../../../_Context";

const Chipset = () => {
    const {
        specs: { proccessors },
    } = useContext(ProductContext);
    const chipset = proccessors?.chipset!;
    return (
        chipset && (
            <div className="mx-4 my-2 flex items-center justify-between *:px-5 md:*:pr-0 *:p-4 rounded-2xl bg-neutral-700 px-6">
                <div className="flex items-center gap-2">
                    <Image
                        width={1000}
                        height={1000}
                        src="/icons/product/chip.png"
                        alt=""
                        className="w-[40px] h-[40px] object-contain"
                    />
                    <p className="font-shabb text-lg">تراشه</p>
                </div>
                <p className="sfreg text-left text-lg tracking-wide">
                    {chipset}
                </p>
            </div>
        )
    );
};

export default Chipset;

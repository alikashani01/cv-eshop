import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../ProductQuickView";

const Chipset = () => {
    const {
        specs: { proccessors },
    } = useContext(Context);
    const chipset = proccessors?.chipset!;
    return (
        chipset && (
            <div className="mx-4 my-2 max-w-[400px] flex items-center justify-between *:px-5 md:*:pr-0 *:p-4 rounded-xl bg-white lg:bg-second-theme px-4">
                <div className="flex items-center gap-2">
                    <Image
                        width={1000}
                        height={1000}
                        src="/icons/product/chip.png"
                        alt=""
                        className="w-[35px] h-[35px] object-contain"
                    />
                    <p className="font-shabt text-neutral-600">تراشه</p>
                </div>
                <p className="sfreg text-left text-lg tracking-wide">
                    {chipset}
                </p>
            </div>
        )
    );
};

export default Chipset;

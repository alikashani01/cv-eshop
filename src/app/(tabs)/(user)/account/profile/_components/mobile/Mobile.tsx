import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import Image from "next/image";
import { useState } from "react";
import Edit from "./edit/Edit";

const Mobile = ({ mobile }: { mobile: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    return (
        <>
            <button
                className="w-full justify-between p-4 px-4 pl-5 mt-4 bg-second-theme border border-neutral-100 rounded-2xl"
                onClick={handleOpen}
            >
                <div className="flex items-center">
                    <p className="w-[60px] text-right text-neutral-600 text-sm font-shabt pr-1">
                        موبایل
                    </p>
                    <p className="text-neutral-800 tracking-[1.5px]">
                        {convertEngToPer(mobile)}
                    </p>
                </div>

                <Image
                    width={18}
                    height={18}
                    src="/icons/edit/blue.png"
                    alt=""
                    objectFit="contain"
                    className=""
                />
            </button>
            <Edit isOpen={isOpen} onClose={handleOpen} />
        </>
    );
};

export default Mobile;

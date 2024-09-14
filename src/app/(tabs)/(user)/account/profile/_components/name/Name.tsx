import Image from "next/image";
import { useState } from "react";
import Edit from "./Edit";

const Name = ({ fullName }: { fullName: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    return (
        <>
            <button
                className="w-full justify-between p-4 px-4 pl-5 bg-second-theme border border-neutral-100 rounded-2xl"
                onClick={handleOpen}
            >
                <div className="flex items-center">
                    <p className="w-[60px] text-right text-neutral-600 text-sm font-shabt pr-1">
                        نام کامل
                    </p>
                    <p className="text-neutral-800">{fullName}</p>
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
            <Edit onClose={handleOpen} isOpen={isOpen} fullName={fullName} />
        </>
    );
};

export default Name;

import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import Edit from "./edit/Edit";

const Mobile = () => {
    const { data: user, isPending } = useFetchUserDetails();
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    return (
        <>
            <button
                className="w-full h-14 justify-between p-4 px-4 pl-6 border-t border-[#f5f5f7]"
                onClick={handleOpen}
            >
                <div className="flex items-center">
                    <p className="w-[70px] text-right text-neutral-600 text-sm font-shabt pr-1">
                        موبایل
                    </p>
                    <p className="text-neutral-800 tracking-[1.5px]">
                        {isPending ? (
                            <Skeleton
                                width="150px"
                                height="22px"
                                variant="text"
                                animation="wave"
                                className="!bg-second-theme"
                            />
                        ) : (
                            convertEngToPer(user?.mobile!)
                        )}
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
            <Backdrop isOpen={isOpen} onClose={handleOpen}>
                <Edit onClose={handleOpen} />
            </Backdrop>
        </>
    );
};

export default Mobile;

import BackdropLarge from "@/src/app/_components/_modules/backdrop/BackdropLarge";
import Image from "next/image";
import { useState } from "react";
import Battery from "./Battery";
import Body from "./Body";
import Connectivity from "./connectivity/Connectivity";
import Display from "./Display";
import Keyboard from "./Keyboard";
import Memory from "./Memory";
import Others from "./Others";
import Proccessors from "./proccessors/Proccessors";
import Storages from "./Storages";

const Specs = () => {
    const [open, setOpen] = useState(false);
    const hadnleOpen = () => setOpen(!open);
    return (
        <>
            <button className="font-shabt" onClick={hadnleOpen}>
                مشخصات
            </button>
            <BackdropLarge isOpen={open} onClose={hadnleOpen}>
                <div className="w-[550px] rounded-2xl bg-second-theme shadow-sm shadow-[#aaa8] overflow-hidden">
                    <button
                        onClick={hadnleOpen}
                        className="fixed z-50 left-4 top-[10px] h-[33px] w-[33px] md:h-[36px] md:w-[36px] bg-white rounded-full"
                    >
                        <Image
                            width={14.5}
                            height={14.5}
                            src="/icons/close.png"
                            alt=""
                        />
                    </button>
                    <div className="w-[550px] h-[90vh] overflow-y-auto no-scrollbar">
                        <Body />
                        <Display />
                        <Proccessors />
                        <Keyboard />
                        <Others />
                        <Connectivity />
                        <Storages />
                        <Memory />
                        <Battery />
                    </div>
                </div>
            </BackdropLarge>
        </>
    );
};

export default Specs;

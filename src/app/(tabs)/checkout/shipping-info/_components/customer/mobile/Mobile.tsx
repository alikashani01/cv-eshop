import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import { useContext, useState } from "react";
import { Context } from "../../../_Context";
import Edit from "./edit/Edit";
import ContextProvider from "./edit/_Context";

const Mobile = () => {
    const { data } = useContext(Context);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <div className="mt-4 lg:mt-6">
                <div className="flex items-center justify-between mb-[6px] px-1">
                    <p className="block mb-1 mr-2 text-sm text-neutral-500 font-shabt">
                        موبایل
                    </p>
                    <button
                        type="button"
                        className="text-sm font-shabt"
                        onClick={handleOpen}
                    >
                        تغییر موبایل
                    </button>
                </div>
                <p className="w-full bg-second-theme p-5 rounded-2xl">
                    {data.mobile}
                </p>
            </div>
            <Backdrop isOpen={open} onClose={() => setOpen(!open)}>
                <ContextProvider>
                    <Edit onClose={handleOpen} />
                </ContextProvider>
            </Backdrop>
        </>
    );
};

export default Mobile;

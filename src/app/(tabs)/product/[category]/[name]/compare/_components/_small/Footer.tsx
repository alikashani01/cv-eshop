"use client";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { useContext } from "react";
import { Context } from "../../_Context";

const Footer = () => {
    const { selectedList, onComparing, isComparing } = useContext(Context);
    return (
        <div className="fixed bottom-0 left-0 z-10 w-full h-14 p-1">
            <button
                className="w-full h-full gap-2 bg-blue-600 rounded-xl text-white text-sm disabled:bg-neutral-700"
                disabled={selectedList?.length === 0}
                onClick={onComparing}
            >
                {isComparing ? (
                    "تغییر محصولات"
                ) : (
                    <>
                        {selectedList?.length === 0
                            ? "حداقل یک محصول انتخاب کنید"
                            : "مقایسه کن"}
                        <p className="text-lg">
                            {convertEngToPer(selectedList?.length)}
                        </p>
                    </>
                )}
            </button>
        </div>
    );
};

export default Footer;

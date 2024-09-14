"use client";

import Image from "next/image";
import { useContext } from "react";
import { Context } from "./_Context";

const Header = ({ onClose }: { onClose: () => void }) => {
    const { addMobile, onSent } = useContext(Context);
    return (
        <div className="h-12 flex items-center justify-between p-4 *:flex *:items-center *:flex-1">
            <div>
                {addMobile.isSuccess && (
                    <button
                        className="text-[.95rem] text-neutral-200 tracking-[1.5px] gap-[2px]"
                        onClick={() => {
                            onSent();
                            addMobile.reset();
                        }}
                    >
                        <Image
                            width={64}
                            height={64}
                            src="/icons/arrow/right-b-2.png"
                            alt=""
                            className="h-8 w-6 object-contain"
                        />
                    </button>
                )}
            </div>
            <p className="!flex-[2] justify-center text-center pb-[3px] text-neutral-400 text-[.9rem]">
                ویرایش شماره موبایل
            </p>
            <div className="justify-end">
                <button className="text-sm text-neutral-100" onClick={onClose}>
                    لغو
                </button>
            </div>
        </div>
    );
};

export default Header;

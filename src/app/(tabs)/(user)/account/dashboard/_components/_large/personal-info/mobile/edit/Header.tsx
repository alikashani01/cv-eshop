import { useContext } from "react";
import { Context } from "./_Context";
import Image from "next/image";

const Header = ({ onClose }: { onClose: () => void }) => {
    const { isSent, onSent, mobile } = useContext(Context);
    return (
        <div className="h-12 flex items-center justify-between p-4">
            <div className="flex items-center gap-1">
                {isSent && (
                    <button
                        className="text-[.95rem] tracking-[1.5px] text-neutral-100 gap-[2px]"
                        onClick={() => {
                            onSent();
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
                <p className="text-neutral-300 text-[.9rem]">
                    ویرایش شماره موبایل
                </p>
            </div>
            <button className="text-sm" onClick={onClose}>
                لغو
            </button>
        </div>
    );
};

export default Header;

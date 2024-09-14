import useVerifyMobile from "@/src/queries/user/profile/mobile/useVerify";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { Context } from "../_Context";
import Container from "../Container";
import Input from "./Input";
import Resend from "./Resend";

const Verify = ({ onClose }: { onClose: () => void }) => {
    const { isSent, onSent, mobile } = useContext(Context);
    const verify = useVerifyMobile();
    const { isSuccess, error, reset } = verify;
    useEffect(() => {
        isSuccess && onClose();
    }, [isSuccess]);
    return (
        isSent && (
            <>
                <p className="flex items-center justify-center text-[.8rem] text-red-500 font-shabt">
                    {error?.message}
                </p>

                <Input verify={verify} />

                <div className="h-12 px-4 flex items-center justify-end">
                    {/* <button
                        className="text-[.95rem] tracking-[1.5px] text-neutral-600 gap-[2px]"
                        onClick={() => {
                            onSent();
                            reset();
                        }}
                    >
                        <Image
                            width={64}
                            height={64}
                            src="/icons/arrow/right-b-2.png"
                            alt=""
                            className="h-8 w-6 object-contain"
                        />
                        {mobile}
                    </button> */}
                    <Resend />
                </div>
            </>
        )
    );
};

export default Verify;

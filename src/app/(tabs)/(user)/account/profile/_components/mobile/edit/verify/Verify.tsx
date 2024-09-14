import useVerifyMobile from "@/src/queries/user/profile/mobile/useVerify";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { Context } from "../_Context";
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
            <div className="w-full">
                <p className="flex items-center justify-center text-[.8rem] text-red-500 font-shabt">
                    {error?.message}
                </p>

                <Input verify={verify} />

                <div className="h-12 px-4 flex items-center justify-between">
                    <Resend />
                </div>
            </div>
        )
    );
};

export default Verify;

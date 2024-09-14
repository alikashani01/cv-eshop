import ActionResponse from "@/src/app/_components/_modules/action-response/ActionResponse";
import useBagStore from "@/src/queries/order/bag/store";
import useVerifyMobile from "@/src/queries/order/mobile/useVerify";
import { useContext, useEffect } from "react";
import { Context } from "../_Context";
import Actions from "./Actions";
import Input from "./Input";
import Top from "./Top";

const Verify = ({ onClose }: { onClose: () => void }) => {
    const { data, verifyOpen, onVerify } = useContext(Context);
    const verify = useVerifyMobile();
    const updateMobile = useBagStore((s) => s.setVerifyMobile);
    const { isSuccess, error, data: resData, reset } = verify;
    useEffect(() => {
        if (isSuccess) {
            updateMobile(resData);
            onVerify();
            onClose();
        }
    }, [isSuccess]);
    return (
        verifyOpen && (
            <>
                <div className="w-full max-w-[340px] h-[200px] flex flex-col items-center justify-center px-4 mx-auto *:w-full">
                    <Top />
                    <Input mobile={data} verify={verify} />
                </div>
                <Actions />
                <ActionResponse
                    success={isSuccess}
                    error={error?.message || ""}
                    message={resData || "شماره موبایل به‌روز شد"}
                    reset={reset}
                />
            </>
        )
    );
};

export default Verify;

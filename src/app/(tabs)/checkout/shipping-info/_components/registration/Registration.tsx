import useAdd from "@/src/queries/user/login/useAdd";
import { convertEngToPerDigits } from "@/src/utils/convertNumberTypes";
import { FormEvent, useEffect, useState } from "react";
import Add from "./Add";
import Verify from "./verify/Verify";

const Registration = () => {
    const [verifyOpen, setVerifyOpen] = useState(false);
    const [mobile, setMobile] = useState("");
    const handleMobileChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        const value = convertEngToPerDigits(target.value);
        setMobile(value);
    };
    const register = useAdd();
    const { isSuccess } = register;
    useEffect(() => {
        isSuccess && setVerifyOpen(true);
    }, [isSuccess]);
    return (
        <div className="p-4">
            <p className="mt-28 mb-4 text-[.95rem] flex items-center justify-center">
                برای ادامه‌ی خرید لطفا وارد حساب کاربری شوید
            </p>
            <div className="min-w-[300px] max-w-[500px] mx-auto flex-grow flex flex-col items-center justify-center bg-[#1a1a1a] md:pt-6 md:pb-10 rounded-2xl pt-2 pb-6">
                {verifyOpen ? (
                    <Verify
                        onVerify={() => setVerifyOpen(!verifyOpen)}
                        mobile={mobile}
                    />
                ) : (
                    <Add
                        mobile={mobile}
                        onChange={handleMobileChange}
                        register={register}
                    />
                )}
            </div>
        </div>
    );
};

export default Registration;

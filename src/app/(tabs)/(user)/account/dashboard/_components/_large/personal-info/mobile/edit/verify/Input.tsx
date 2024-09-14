import { convertEngToPerDigits } from "@/src/utils/convertNumberTypes";
import { CircularProgress } from "@mui/material";
import { UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
    ClipboardEvent,
    KeyboardEvent,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { Context } from "../_Context";
import ActionResponse from "@/src/app/_components/_modules/action-response/ActionResponse";

interface Props {
    verify: UseMutationResult<string, Error, string, unknown>;
}

const Input = ({ verify }: Props) => {
    const { replace } = useRouter();
    const ref = useRef<any[]>([]);

    const { isSuccess, error, reset, data } = verify;

    const { mobile } = useContext(Context);

    const [otp, setOtp] = useState(["", "", "", ""]);

    useEffect(() => {
        let isEmpty = true;
        for (let i = 0; i < otp.length; i++) {
            isEmpty = otp[i] !== "" ? false : true;
        }
        const updatedOTP = [...otp];
        if (!isEmpty) {
            verify.mutate(updatedOTP.join(""), {
                onSuccess: () => replace("/account/dashboard"),
            });
        }
    }, [otp, mobile]);

    useEffect(() => {
        ref.current && ref.current[0].focus();
    }, []);

    const handleChange = (index: number, value: string) => {
        const updatedCode = [...otp];
        updatedCode[index] = convertEngToPerDigits(value);
        setOtp(updatedCode);
        index < 3 && value !== "" && ref.current[index + 1].focus();
    };

    const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pastedData = event.clipboardData.getData("text/plain");
        const updatedOTP = [...otp];
        if (pastedData) {
            for (let i = 0; i < pastedData.length; i++) {
                updatedOTP[i] = convertEngToPerDigits(pastedData[i]);
            }
            setOtp(updatedOTP);
            verify.mutate(updatedOTP.join(""), {
                onSuccess: () => replace("/account/dashboard"),
            });
            ref.current[3]?.focus();
        }
    };

    const handleKeyDown = (
        index: number,
        event: KeyboardEvent<HTMLInputElement>
    ) => {
        event.key === "Backspace" &&
            index > 0 &&
            otp[index] === "" &&
            ref.current[index - 1].focus();
    };

    return (
        <>
            <div className="h-[100px] flex items-center justify-center gap-5 ltr">
                {verify.isPending ? (
                    <div className="w-full flex items-center justify-center">
                        <CircularProgress size={15} />
                    </div>
                ) : (
                    otp.map((code, index) => (
                        <input
                            style={{ textAlignLast: "center" }}
                            ref={(inputRef: any) =>
                                (ref.current[index] = inputRef!)
                            }
                            className="w-[60px] h-14 bg-slate-700 border border-slate-600 text-white focus:border-blue-600 text-center text-3xl pt-1 transition duration-200"
                            key={index}
                            id="otpCode"
                            type="text"
                            inputMode="numeric"
                            max={1}
                            autoComplete="one-time-code"
                            value={code}
                            onChange={(e) =>
                                handleChange(index, e.target.value)
                            }
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={(e) => handlePaste(e)}
                        />
                    ))
                )}
            </div>
            <ActionResponse
                success={isSuccess}
                error={error?.message || ""}
                message={data || ""}
                reset={reset}
            />
        </>
    );
};

export default Input;

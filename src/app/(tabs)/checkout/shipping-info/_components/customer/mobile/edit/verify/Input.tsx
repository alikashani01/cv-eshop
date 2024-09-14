import { CircularProgress } from "@mui/material";
import { UseMutationResult } from "@tanstack/react-query";
import {
    ClipboardEvent,
    KeyboardEvent,
    useEffect,
    useRef,
    useState,
} from "react";

interface Props {
    mobile: string;
    verify: UseMutationResult<string, Error, string, unknown>;
}

const Input = ({ mobile, verify }: Props) => {
    const ref = useRef<any[]>([]);

    const [otp, setOtp] = useState(["", "", "", ""]);

    const { isPending } = verify;

    useEffect(() => {
        const updated =
            otp[0] !== "" && otp[1] !== "" && otp[2] !== "" && otp[3] !== "";

        const updatedCode = [...otp];
        if (updated) {
            verify.mutate(updatedCode.join(""));
        }
    }, [otp, mobile]);

    useEffect(() => {
        ref.current && ref.current[0].focus();
    }, [ref.current]);

    const handleChange = (index: number, value: string) => {
        const updatedCode = [...otp];

        updatedCode[index] = englishNumbersToPersian(value);

        setOtp(updatedCode);

        index < 3 && value !== "" && ref.current[index + 1].focus();
    };

    const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pastedData = event.clipboardData?.getData("text/plain");
        const updatedOTPCode = [...otp];

        if (pastedData) {
            for (let i = 0; i < pastedData.length; i++) {
                updatedOTPCode[i] = englishNumbersToPersian(pastedData[i]);
            }

            setOtp(updatedOTPCode);

            verify.mutate(updatedOTPCode.join(""));

            ref.current[3]?.focus();
        }
    };

    const handleKeyDown = (
        event: KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (event.key === "Backspace" && index > 0 && otp[index] === "") {
            ref.current[index - 1].focus();
        }
    };

    const englishNumbersToPersian = (value: string) => {
        const persianDigits: string[] = [
            "۰",
            "۱",
            "۲",
            "۳",
            "۴",
            "۵",
            "۶",
            "۷",
            "۸",
            "۹",
        ];
        return value.replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
    };

    return (
        <div style={{ direction: "ltr" }}>
            <div className="w-full h-16 flex items-center justify-between gap-4">
                {isPending ? (
                    <div className="flex items-center justify-center w-full">
                        <CircularProgress size={15} sx={{ color: "#aaa" }} />
                    </div>
                ) : (
                    otp.map((code, index) => (
                        <input
                            style={{ textAlignLast: "center" }}
                            ref={(inputRef: any) =>
                                (ref.current[index] = inputRef!)
                            }
                            className="h-full w-1/5 bg-slate-700 border border-slate-600 font-shabb text-center text-4xl text-neutral-200 pt-1 focus:border-blue-500 transition duration-500"
                            key={index}
                            id="otpCode"
                            type="text"
                            inputMode="numeric"
                            max={1}
                            autoComplete="one-time-code"
                            value={code}
                            onChange={(event) =>
                                handleChange(index, event.target.value)
                            }
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onPaste={(e) => handlePaste(e)}
                        />
                    ))
                )}
            </div>

            <p className="mr-1 mt-2 h-4 text-rose-500 text-sm font-shabt">
                {verify.error?.message}
            </p>
        </div>
    );
};

export default Input;

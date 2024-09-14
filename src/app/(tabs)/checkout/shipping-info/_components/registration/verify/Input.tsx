import { Login } from "@/src/queries/user/Entities";
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
    login: UseMutationResult<string, Error, Login, unknown>;
}

const Input = ({ mobile, login }: Props) => {
    const ref = useRef<any[]>([]);

    const [otp, setOtp] = useState(["", "", "", ""]);

    const { isPending } = login;

    useEffect(() => {
        const updated =
            otp[0] !== "" && otp[1] !== "" && otp[2] !== "" && otp[3] !== "";

        const updatedCode = [...otp];
        if (updated) {
            login.mutate({
                mobile,
                otp: updatedCode.join(""),
            });
        }
    }, [otp, mobile]);

    useEffect(() => {
        ref.current && ref.current[0].focus();
    }, [ref.current]);

    const handleChange = (index: number, value: string) => {
        const updatedCode = [...otp];

        updatedCode[index] = englishNumbersToPersian(value);

        setOtp(updatedCode);

        if (index < 3 && value !== "") {
            ref.current[index + 1].focus();
        }
        // else if (index === 3 && value !== "") {
        //     login.mutate({
        //         mobile,
        //         otp: otp.join(""),
        //     });
        // }
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

            login.mutate({
                mobile,
                otp: updatedOTPCode.join(""),
            });

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
        <div
            style={{ direction: "ltr" }}
            className="h-full flex items-center justify-between gap-4"
        >
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
                        className="w-1/4 h-16 bg-neutral-700 font-shabb text-center text-3xl text-gray-200 pt-1 focus:border-blue-500 transition duration-200 border-[#e1e1e1]"
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
    );
};

export default Input;

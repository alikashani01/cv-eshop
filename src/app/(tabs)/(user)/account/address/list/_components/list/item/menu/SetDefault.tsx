import useDefault from "@/src/queries/user/address/useDefault";
import { CircularProgress } from "@mui/material";
import Image from "next/image";

interface Props {
    id: string;
    isDefault: boolean;
}

const SetDefault = ({ id, isDefault }: Props) => {
    const defaultAddress = useDefault(id);
    return (
        !isDefault && (
            <button
                onClick={() => defaultAddress.mutate()}
                className="w-full h-10 justify-between p-3 gap-2 px-4 pl-[14.5px] border-b border-gray-700"
            >
                <p className="text-[.8rem] text-gray-200 font-shabt">
                    آدرس پیش‌فرض
                </p>
                {defaultAddress.isPending ? (
                    <CircularProgress size={15} sx={{ color: "#00d166" }} />
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="#ddd"
                        className="bi bi-arrow-repeat"
                        viewBox="0 0 16 16"
                    >
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                        <path
                            fillRule="evenodd"
                            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
                        />
                    </svg>
                )}
            </button>
        )
    );
};

export default SetDefault;

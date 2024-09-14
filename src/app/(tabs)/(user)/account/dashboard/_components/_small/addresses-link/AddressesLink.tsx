import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Link from "next/link";
import DefaultAddress from "./DefaultAddress";

const AddressesLink = () => {
    return (
        <Link
            href="address/list"
            className="w-full justify-between bg-second-theme rounded-2xl p-2 px-4 pl-4"
        >
            <div className="flex-grow w-[calc(100%-2px)] flex items-center gap-3 text-neutral-600">
                <div className="rounded-full bg-rose-600 min-w-8 max-w-8 min-h-8 max-h-8 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#fff"
                        className="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                    >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                </div>
                <div className="w-full">
                    <p className="text-[.88rem] pb-[2px]">آدرس‌های ذخیره شده</p>
                    <DefaultAddress />
                </div>
            </div>
            <div className="min-w-[18px]">
                <ArrowBackIosNewRoundedIcon
                    sx={{ fontSize: "1rem", color: "#666" }}
                />
            </div>
        </Link>
    );
};

export default AddressesLink;

import CloseButton from "@/src/app/_components/_modules/close-button/CloseButton";
import { useContext } from "react";
import { Context } from "../Container";

const Header = ({ onClose }: { onClose: () => void }) => {
    const { status } = useContext(Context);
    const statusColor =
        status === "فعال"
            ? "text-[orange]"
            : status === "تحویل شده"
            ? "text-[#00d166]"
            : status === "ارسال شده"
            ? "text-[gold]"
            : status === "لغو شده" || status === "مرجوع شده"
            ? "text-[#ff6666]"
            : "";
    return (
        <div className="sticky top-0 z-10 h-16 flex items-center justify-between bg-white border-b border-[#f5f5f5] *:flex *:items-center *:flex-1">
            <p className={`text-[1.05rem] ${statusColor}`}>{status}</p>
            <p className="text-neutral-600 justify-center">جزییات سفارش</p>
            <div className="justify-end">
                <CloseButton onClose={onClose} />
            </div>
        </div>
    );
};

export default Header;

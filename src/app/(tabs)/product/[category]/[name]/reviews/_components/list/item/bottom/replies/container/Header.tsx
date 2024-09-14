import useFetchReviewReplies from "@/src/queries/review/reply/useFetchList";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { useContext } from "react";
import { Context } from "../../../Item";
import CloseButton from "./CloseButton";

const Header = ({ onClose }: { onClose: () => void }) => {
    const { _id } = useContext(Context);
    const { data: replies } = useFetchReviewReplies(_id);
    return (
        <div className="hidden sticky top-0 z-10 h-12 lg:h-16 md:flex items-center justify-between px-4 lg:px-6 bg-slate-800 border-b border-slate-700">
            <p className="text-neutral-200 justify-center text-sm font-shabt">
                <span className="pl-1 text-lg">
                    {convertEngToPer(replies?.length || 0)}
                </span>
                پاسخ
            </p>
            <CloseButton onClose={onClose} />
        </div>
    );
};

export default Header;

import DisLike from "../Dislike";
import Like from "../Like";
import CloseButton from "./CloseButton";

const Header = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="hidden md:flex sticky top-0 h-16 items-center justify-between px-5 bg-slate-800">
            <CloseButton onClose={onClose} />
            <div className="flex items-center gap-3">
                <p className="pt-[2px] text-sm font-shabt text-slate-200">
                    مفید بود؟
                </p>
                <Like />
                <DisLike />
            </div>
        </div>
    );
};

export default Header;

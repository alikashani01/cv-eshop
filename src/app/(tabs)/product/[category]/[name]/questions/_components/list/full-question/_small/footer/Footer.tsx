import DisLike from "../../Dislike";
import Like from "../../Like";
import CloseButton from "./CloseButton";

const Footer = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="fixed bottom-0 left-0 z-10 w-full h-11 flex items-center justify-between px-4 bg-slate-800 border-t border-slate-700">
            <CloseButton onClose={onClose} />
            <div className="flex items-center gap-4">
                <Like />
                <DisLike />
            </div>
        </div>
    );
};

export default Footer;

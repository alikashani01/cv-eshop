import CloseButton from "./CloseButton";
import Delete from "./Delete";

const Footer = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="lg:hidden fixed bottom-0 left-0 z-10 w-full h-11 flex items-center justify-between px-4 bg-slate-800 border-t border-slate-700">
            <CloseButton onClose={onClose} />
            <Delete onClose={onClose} />
        </div>
    );
};

export default Footer;

import Delete from "./Delete";
import CloseButton from "./CloseButton";

const Header = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="sticky top-0 z-10 h-11 lg:h-14 flex items-center justify-between px-4 lg:px-6 bg-slate-800 border-b border-slate-700 *:flex *:items-center *:flex-1">
            <div>
                <div className="hidden md:block">
                    <Delete onClose={onClose} />
                </div>
            </div>
            <p className="justify-center text-neutral-300">جزییات دیدگاه</p>
            <div className="justify-end">
                <CloseButton onClose={onClose} />
            </div>
        </div>
    );
};

export default Header;

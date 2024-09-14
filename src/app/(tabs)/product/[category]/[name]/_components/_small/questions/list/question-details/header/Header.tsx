import CloseButton from "./CloseButton";

const Header = ({ onClose }: { onClose?: () => void }) => {
    return (
        <div className="sticky top-0 z-10 h-11 lg:h-14 flex items-center justify-between px-4 lg:px-6 bg-backdrop border-b border-[#eee]">
            <p className="justify-center text-[.95rem] text-neutral-600">
                جزییات پرسش
            </p>
            <CloseButton onClose={onClose} />
        </div>
    );
};

export default Header;

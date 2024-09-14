import CloseButton from "@/src/app/_components/_modules/close-button/CloseButton";

const Header = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="sticky top-0 z-10 h-16 flex items-center justify-between px-6 bg-white border-b border-[#f5f5f5] *:flex *:items-center *:flex-1">
            <div />
            <p className="text-neutral-600 justify-center">جزییات پرسش</p>
            <div className="justify-end">
                <CloseButton onClose={onClose} />
            </div>
        </div>
    );
};

export default Header;

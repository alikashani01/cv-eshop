import Image from "next/image";

const CloseButton = ({ onClose }: { onClose?: () => void }) => {
    return (
        <button
            type="button"
            onClick={onClose}
            className="hidden lg:flex h-[35px] w-[35px] bg-slate-700 rounded-full"
        >
            <Image width={14} height={14} src="/icons/close/w.png" alt="" />
        </button>
    );
};

export default CloseButton;

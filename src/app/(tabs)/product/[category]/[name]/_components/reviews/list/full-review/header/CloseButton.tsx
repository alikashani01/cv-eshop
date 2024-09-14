import Image from "next/image";

const CloseButton = ({ onClose }: { onClose?: () => void }) => {
    return (
        <button
            type="button"
            onClick={onClose}
            className="hidden lg:flex h-[33px] w-[33px] bg-slate-900 rounded-full"
        >
            <Image width={14.5} height={14.5} src="/icons/close.png" alt="" />
        </button>
    );
};

export default CloseButton;

import Image from "next/image";

const CloseButton = ({ onClose }: { onClose?: () => void }) => {
    return (
        <button
            type="button"
            onClick={onClose}
            className="hidden lg:flex h-[33px] w-[33px] bg-slate-700 rounded-full"
        >
            <Image width={13} height={13} src="/icons/close/w.png" alt="" />
        </button>
    );
};

export default CloseButton;

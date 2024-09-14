import Image from "next/image";

const CloseButton = ({ onClose }: { onClose?: () => void }) => {
    return (
        <button
            type="button"
            onClick={onClose}
            className="h-[32px] w-[32px] bg-white rounded-full"
        >
            <Image width={14} height={14} src="/icons/close.png" alt="" />
        </button>
    );
};

export default CloseButton;

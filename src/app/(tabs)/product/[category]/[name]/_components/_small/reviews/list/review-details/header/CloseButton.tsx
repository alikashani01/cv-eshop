import Image from "next/image";

const CloseButton = ({ onClose }: { onClose?: () => void }) => {
    return (
        <button
            type="button"
            onClick={onClose}
            className="hidden lg:flex h-[33px] w-[33px] md:h-[36px] md:w-[36px] bg-[#f1f1f1] rounded-full"
        >
            <Image width={14.5} height={14.5} src="/icons/close.png" alt="" />
        </button>
    );
};

export default CloseButton;

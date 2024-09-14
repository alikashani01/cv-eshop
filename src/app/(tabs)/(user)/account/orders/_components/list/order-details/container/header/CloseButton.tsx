import Image from "next/image";

const CloseButton = ({ onClose }: { onClose: () => void }) => {
    return (
        <button
            type="button"
            onClick={onClose}
            className="bg-[#555] h-[38px] w-[38px] rounded-full"
        >
            <Image
                width={15.5}
                height={15.5}
                src="/icons/close/close-light.png"
                alt=""
            />
        </button>
    );
};

export default CloseButton;

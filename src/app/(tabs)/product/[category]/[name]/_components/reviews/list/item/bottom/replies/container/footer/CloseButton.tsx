import Image from "next/image";

const CloseButton = ({ onClose }: { onClose: () => void }) => {
    return (
        <button
            onClick={onClose}
            className="bg-slate-600 w-[32px] h-[32px] pt-[1.5px] rounded-full"
        >
            <Image
                width={16}
                height={16}
                src="/icons/arrow/white-t.png"
                alt=""
                className=""
            />
        </button>
    );
};

export default CloseButton;

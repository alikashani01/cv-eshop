import Image from "next/image";

interface Props {
    onClose: () => void;
    onCancel?: () => void;
    styles?: any;
}

const CloseButton = ({ onClose, onCancel = () => {}, styles }: Props) => {
    return (
        <button
            style={styles}
            type="button"
            onClick={() => {
                onClose();
                onCancel();
            }}
            className="h-[30px] w-[30px] md:h-[36px] md:w-[36px] bg-[#f1f1f1] rounded-full"
        >
            <Image width={14.5} height={14.5} src="/icons/close.png" alt="" />
        </button>
    );
};

export default CloseButton;

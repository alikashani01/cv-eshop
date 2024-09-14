const CancelButtonLines = ({ onClose }: { onClose: () => void }) => {
    return (
        <button onClick={onClose} className="mx-auto p-3">
            <span className="bg-neutral-600 w-6 h-[5px] rounded-xl block -rotate-[12deg] -ml-[1.5px]"></span>
            <span className="bg-neutral-600 w-6 h-[5px] rounded-xl block rotate-[12deg] -mr-[1.5px]"></span>
        </button>
    );
};

export default CancelButtonLines;

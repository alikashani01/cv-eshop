const Cancel = ({ onToggle }: { onToggle: () => void }) => {
    return (
        <button onClick={onToggle} className="text-blue-500 text-[.92rem]">
            لغو
        </button>
    );
};

export default Cancel;

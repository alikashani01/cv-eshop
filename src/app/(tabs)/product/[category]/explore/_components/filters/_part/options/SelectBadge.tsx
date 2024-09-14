const SelectBadge = ({ isSelected }: { isSelected: boolean }) => {
    return (
        <div
            className={`
                w-[25px] h-[25px] rounded-full bg-neutral-200 border 
                ${isSelected ? "border-[#007aff]" : "border-neutral-300"}`}
        />
    );
};

export default SelectBadge;

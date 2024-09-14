import Actions from "./Actions";

const ToggleOff = ({ onToggle }: { onToggle: () => void }) => {
    return (
        <div className="w-full h-full flex items-center justify-between bg-[#f5f5f555] border-b border-neutral-100 backdrop-blur-xl px-4">
            <div className="justify-center text-neutral-600">آدرس‌ها</div>
            <Actions onToggle={onToggle} />
        </div>
    );
};

export default ToggleOff;

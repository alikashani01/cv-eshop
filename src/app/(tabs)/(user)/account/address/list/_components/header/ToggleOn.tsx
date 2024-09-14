import Cancel from "./Cancel";
import DeleteAll from "./DeleteAll";

const ToggleOn = ({ onToggle }: { onToggle: () => void }) => {
    return (
        <div className="h-full flex items-center justify-between px-4">
            <DeleteAll onToggle={onToggle} />
            <Cancel onToggle={onToggle} />
        </div>
    );
};

export default ToggleOn;

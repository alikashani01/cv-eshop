import Cancel from "./Cancel";
import DeleteAll from "./DeleteAll";

const ToggleOn = ({ onToggle }: { onToggle: () => void }) => {
    return (
        <>
            <DeleteAll onToggle={onToggle} />
            <Cancel onToggle={onToggle} />
        </>
    );
};

export default ToggleOn;

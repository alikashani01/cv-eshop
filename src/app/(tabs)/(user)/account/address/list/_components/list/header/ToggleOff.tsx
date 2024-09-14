import Actions from "./Actions";
import Title from "./Title";

const ToggleOff = ({ onToggle }: { onToggle: () => void }) => {
    return (
        <>
            <Title />
            <Actions onToggle={onToggle} />
        </>
    );
};

export default ToggleOff;

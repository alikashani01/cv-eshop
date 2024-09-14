import Quantity from "./Quantity";
import TotalPrice from "./TotalPrice";

const Bottom = () => {
    return (
        <div className="h-14 flex items-center justify-between px-4">
            <Quantity />
            <TotalPrice />
        </div>
    );
};

export default Bottom;

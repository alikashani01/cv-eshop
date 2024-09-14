import Code from "./Code";
import TotalPrice from "./TotalPrice";

const Top = () => {
    return (
        <div className="flex items-center justify-center gap-4 *:w-1/2">
            <Code />
            <TotalPrice />
        </div>
    );
};

export default Top;

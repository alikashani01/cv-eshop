import First from "./First";
import Second from "./Second";
import Third from "./Third";

const Info = () => {
    return (
        <div className="absolute *:absolute *:z-40 w-1/2 h-full left-0 z-30 flex flex-col items-center justify-center">
            <First />
            <Second />
            <Third />
        </div>
    );
};

export default Info;

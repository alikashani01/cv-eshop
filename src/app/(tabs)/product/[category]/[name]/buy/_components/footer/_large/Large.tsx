import Actions from "../actions/Actions";
import Price from "./Price";
import Quantity from "./Quantity";

const LargeScreen = () => {
    return (
        <div className="hidden md:flex w-full h-full items-center justify-around *:flex *:items-center *:flex-1 px-[5%] lg:px-[8%]">
            <div className="gap-4">
                <Quantity />
                <Price />
            </div>

            <div className="justify-end">
                <Actions />
            </div>
        </div>
    );
};

export default LargeScreen;

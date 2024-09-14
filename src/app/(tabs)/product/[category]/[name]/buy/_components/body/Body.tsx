import Colors from "./Colors";
import Photos from "./photos/Photos";
import Pricing from "./pricing/Pricing";

const Body = () => {
    return (
        <div className="lg:h-[calc(100vh-184px)] flex flex-col lg:flex-row gap-2 pb-28 p-2 lg:p-0 lg:px-[8%]">
            <Photos />
            <div className="flex-1 h-full px-6 overflow-y-auto lg:pt-10 lg:bg-second-theme rounded-2xl">
                <Colors />
                <Pricing />
            </div>
        </div>
    );
};

export default Body;

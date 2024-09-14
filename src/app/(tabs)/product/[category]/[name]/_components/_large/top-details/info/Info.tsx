import TopFeatures from "../../../top-features/TopFeatures";
import Description from "../../../Description";
import Pricing from "./pricing/Pricing";

const Info = () => {
    return (
        <div className="flex flex-col gap-4 *:bg-second-theme *:rounded-2xl">
            <Pricing />
            <TopFeatures />
            <Description />
        </div>
    );
};

export default Info;

import Pricing from "./pricing/Pricing";
import Gallery from "./gallery/Gallery";
import Header from "./Header";
import Highlights from "./Highlights";
import Specs from "./specs/Specs";

const Body = () => {
    return (
        <div className="h-[100vh] overflow-y-auto pb-40">
            <Header />
            <Gallery />
            <Pricing />
            <Highlights />
            <Specs />
        </div>
    );
};

export default Body;

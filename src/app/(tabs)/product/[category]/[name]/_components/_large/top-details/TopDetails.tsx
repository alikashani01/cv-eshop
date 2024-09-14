import Gallery from "./gallery/Gallery";
import Info from "./info/Info";

const TopDetails = () => {
    return (
        <div className="grid grid-cols-2 gap-6 pt-10 px-[5%] lg:px-[8%] relative">
            <Gallery />
            <Info />
        </div>
    );
};

export default TopDetails;

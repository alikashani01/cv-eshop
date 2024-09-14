import Details from "../details/Details";
import Info from "../info/Info";
import Header from "./Header";

const Small = () => {
    return (
        <div className="md:hidden">
            <Header />
            <Details />
            <Info />
        </div>
    );
};

export default Small;

import Header from "./Header";
import Info from "../info/Info";

const Small = () => {
    return (
        <div className="lg:hidden">
            <Header />
            <Info />
        </div>
    );
};

export default Small;

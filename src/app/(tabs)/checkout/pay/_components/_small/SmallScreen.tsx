import Items from "../items/Items";
import Prices from "../prices/Prices";
import ShippingInfo from "../shipping-info/ShippingInfo";
import Footer from "./Footer";
import Header from "./Header";
import SubHeader from "./SubHeader";

const SmallScreen = () => {
    return (
        <div className="lg:hidden">
            <Header />
            <SubHeader />
            <div className="px-4 pt-4 pb-20">
                <ShippingInfo />
                <Prices />
                <Items />
            </div>
            <Footer />
        </div>
    );
};

export default SmallScreen;

import Items from "../items/Items";
import Prices from "../prices/Prices";
import ShippingInfo from "../shipping-info/ShippingInfo";
import Header from "./Header";

const LargeScreen = () => {
    return (
        <div className="hidden lg:block pt-12">
            <Header />
            <div className="grid grid-cols-2 gap-[5%] pt-6 px-[5%] lg:px-[8%]">
                <div>
                    <ShippingInfo />
                    <Prices />
                </div>
                <Items />
            </div>
        </div>
    );
};

export default LargeScreen;

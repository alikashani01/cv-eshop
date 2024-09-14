import Address from "../address/Address";
import Customer from "../customer/Customer";
import Footer from "./Footer";
import Header from "./Header";
import SubHeader from "./SubHeader";

const SmallScreen = () => {
    return (
        <div className="lg:hidden">
            <Header />
            <SubHeader />
            <div className="px-4 pb-10">
                <Customer />
                <Address />
            </div>
            <Footer />
        </div>
    );
};

export default SmallScreen;

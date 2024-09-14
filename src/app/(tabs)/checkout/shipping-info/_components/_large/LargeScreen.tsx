import Address from "../address/Address";
import Customer from "../customer/Customer";
import Header from "./Header";

const LargeScreen = () => {
    return (
        <div className="hidden lg:block pt-12">
            <Header />
            <div className="p-4 pt-8 grid grid-cols-2 gap-[5%] px-[5%] lg:px-[8%]">
                <Customer />
                <Address />
            </div>
        </div>
    );
};

export default LargeScreen;

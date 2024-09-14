"use client";

import Dates from "./dates/Dates";
import Items from "./items/Items";
import Prices from "./Prices";
import ShippingInfo from "./ShippingInfo";
import Top from "./top/Top";

const Info = () => {
    return (
        <div className="flex flex-col gap-4 p-4 pt-16 pb-20 lg:p-6 lg:max-w-[80%] lg:mx-auto">
            <Top />

            <Dates />

            <ShippingInfo />

            <Prices />

            <Items />
        </div>
    );
};

export default Info;

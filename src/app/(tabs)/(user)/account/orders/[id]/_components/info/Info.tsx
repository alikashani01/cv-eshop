"use client";

import useFetchOrderDetails from "@/src/queries/order/useFetchOrderDetails";
import Dates from "./dates/Dates";
import Items from "./items/Items";
import Prices from "./Prices";
import ShippingInfo from "./ShippingInfo";
import Top from "./top/Top";
import { useParams } from "next/navigation";
import Loading from "./Loading";

const Info = () => {
    const { id } = useParams<{ id: string }>();
    const { isPending } = useFetchOrderDetails(id);
    return (
        <div className="flex flex-col gap-4 p-4 pt-16 pb-20 lg:p-6 lg:max-w-[80%] xl:max-w-[60%] lg:mx-auto">
            {isPending ? (
                <Loading />
            ) : (
                <>
                    <Top />

                    <Dates />

                    <ShippingInfo />

                    <Prices />

                    <Items />
                </>
            )}
        </div>
    );
};

export default Info;

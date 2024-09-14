"use client";
import useFetchOrderDetails from "@/src/queries/order/useFetchOrderDetails";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { CircularProgress } from "@mui/material";
import { useParams } from "next/navigation";
import Items from "./items/Items";
import Prices from "./prices/Prices";

const Body = () => {
    const { id } = useParams<{ id: string }>();

    const { data: order, isPending } = useFetchOrderDetails(id);

    if (isPending)
        return (
            <div className="flex items-center justify-center mt-10">
                <CircularProgress size={16} sx={{ color: "#777" }} />
            </div>
        );

    if (!order) return null;

    const { code, items, prices, shippingInfo } = order;

    return (
        <div className="p-4 pb-28 lg:pb-10 lg:w-[80%] lg:mx-auto lg:grid grid-cols-2 gap-6">
            <div>
                <div className="flex items-center justify-between bg-second-theme rounded-2xl p-4 h-14">
                    <p className="text-sm text-neutral-500 font-shabt">
                        شناسه‌ی سفارش
                    </p>
                    <p className="text-lg tracking-[3px]">
                        {convertEngToPer(code!)}
                    </p>
                </div>

                <div className="flex items-center justify-between bg-second-theme rounded-2xl p-4 mt-4 h-14">
                    <p className="text-sm text-neutral-500 font-shabt">
                        مجموع هزینه‌ها
                    </p>
                    <div className="flex items-center gap-1">
                        <p className="text-lg tracking-[1px]">
                            {prices.total.toLocaleString("fa")}
                        </p>
                        <p className="text-[.65rem] text-[#777] font-shabmt">
                            تومان
                        </p>
                    </div>
                </div>

                <div className="bg-second-theme rounded-2xl p-4 mt-4">
                    <p className="text-sm text-neutral-500 font-shabt">
                        اطلاعات حمل و نقل
                    </p>
                    <div className="flex items-center justify-between pt-4">
                        <p>{shippingInfo?.customer.fullName}</p>
                        <p className="tracking-[3px]">
                            {convertEngToPer(shippingInfo?.customer.mobile)}
                        </p>
                    </div>
                    <p className="pt-1">
                        {shippingInfo?.address.state} -{" "}
                        {shippingInfo?.address.city}
                    </p>
                    <p className="pt-1">{shippingInfo?.address.street}</p>
                    <div className="pt-1 flex items-center gap-4">
                        <p className="text-sm text-neutral-500 font-shabt">
                            کد پستی
                        </p>
                        <p>{convertEngToPer(shippingInfo?.address.zipCode)}</p>
                    </div>
                    <p className="pt-1">{shippingInfo?.address.description}</p>
                </div>

                <Prices />
            </div>

            <Items items={items} />
        </div>
    );
};

export default Body;

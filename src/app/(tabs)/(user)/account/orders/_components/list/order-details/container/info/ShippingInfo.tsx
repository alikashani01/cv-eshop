"use client";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { useContext } from "react";
import { Context } from "../Container";

const ShippingInfo = () => {
    const { shippingInfo } = useContext(Context);
    return (
        <div className="bg-second-theme rounded-xl p-4 mt-0">
            <p className="text-sm text-neutral-500">تحویل گیرنده</p>
            <div className="flex items-center justify-between pt-2 pb-1 border-b border-neutral-200">
                <p className="text-neutral-800">
                    {shippingInfo?.customer.fullName}
                </p>
                <p className="text-neutral-800 tracking-[3px]">
                    {convertEngToPer(shippingInfo?.customer.mobile)}
                </p>
            </div>
            <div className="pt-4">
                <p className="text-sm text-neutral-500">محل تحویل</p>
                <p className="pt-2 text-neutral-800">
                    {shippingInfo?.address.state} - {shippingInfo?.address.city}
                </p>
                <p className="pt-1 text-neutral-800">
                    {shippingInfo?.address.street}
                </p>
                <p className="pt-1 text-neutral-800">
                    {shippingInfo?.address.description}
                </p>
                <div className="pt-1 flex items-center gap-4">
                    <p className="text-sm text-neutral-500">کد پستی</p>
                    <p className="text-neutral-800 tracking-[2px]">
                        {convertEngToPer(shippingInfo?.address.zipCode)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfo;

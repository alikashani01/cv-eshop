"use client";
import useBagStore from "@/src/queries/order/bag/store";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";

const ShippingInfo = () => {
    const {
        fullName,
        mobile,
        title,
        state,
        city,
        street,
        zipCode,
        description,
    } = useBagStore((s) => s.shippingInfo);

    return (
        <div className="bg-second-theme shadow-sm shadow-neutral-200 rounded-xl overflow-hidden">
            <div className="p-3 px-4 border-b border-white">
                <p className="text-[.85rem] text-neutral-500 font-shabt">
                    تحویل گیرنده
                </p>
                <div className="flex items-center justify-between text-neutral-700 text-[1.08rem] pt-2">
                    <p>{fullName}</p>
                    <p className="tracking-[2px]">{convertEngToPer(mobile)}</p>
                </div>
            </div>
            <div className="p-3 px-4">
                <p className="text-[.85rem] text-neutral-500 font-shabt">
                    محل تحویل
                </p>
                <div className="*:text-neutral-700 pt-1 *:my-[6px]">
                    <p>{title}</p>
                    <p>
                        <span>{state}</span> - <span>{city}</span>
                    </p>
                    <p>{street}</p>
                    <p>
                        <span className="text-[.85rem] text-neutral-500 font-shabt ml-4">
                            کد پستی
                        </span>
                        <span className="tracking-[2px]">
                            {convertEngToPer(zipCode)}
                        </span>
                    </p>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfo;

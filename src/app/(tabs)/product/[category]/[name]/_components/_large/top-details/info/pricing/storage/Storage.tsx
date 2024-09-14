import { Pricing } from "@/src/queries/product/Entities";
import DiscountBadge from "../DiscountBadge";
import DiscountPrice from "../DiscountPrice";
import OldPrice from "../OldPrice";
import Price from "../Price";

const Storage = ({ price }: { price: Pricing }) => {
    const discount = price.discount?.value! > 0 ? price.discount?.value : null;
    return (
        <div className="flex items-center justify-between gap-2 px-6 *:flex *:items-center *:flex-[3]">
            <div className="gap-2">
                <p className="font-shabb text-2xl text-neutral-600 pt-1">
                    {price.storage?.capacity}
                </p>
                <p className="text-[.8rem] text-neutral-500 font-shabt pt-[3px]">
                    {price.storage?.unit}
                </p>
            </div>
            <div className="!flex-[1] justify-center">
                <DiscountBadge discount={discount} />
            </div>
            <div className="justify-end flex-col !items-end">
                {discount ? (
                    <>
                        <DiscountPrice
                            price={price.value}
                            discount={discount}
                        />
                        <OldPrice price={price.value} />
                    </>
                ) : (
                    <Price price={price.value} />
                )}
            </div>
        </div>
    );
};

export default Storage;

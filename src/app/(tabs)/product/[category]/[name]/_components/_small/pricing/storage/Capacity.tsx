import { Pricing } from "@/src/queries/product/Entities";

const Capacity = ({ price }: { price: Pricing }) => {
    return (
        <div className="gap-2">
            <p className="font-shabb text-2xl text-neutral-600 pt-1">
                {price.storage?.capacity}
            </p>
            <p className="text-[.7rem] text-neutral-500 font-shabt pt-[3px]">
                {price.storage?.unit}
            </p>
        </div>
    );
};

export default Capacity;

import { Pricing } from "@/src/queries/product/Entities";
import DiscountBadge from "../DiscountBadge";
import DiscountPrice from "../DiscountPrice";
import OldPrice from "../OldPrice";
import Price from "../Price";

const Prices = ({ price }: { price: Pricing }) => {
    const discount = price.discount?.value! > 0 ? price.discount?.value : null;
    return (
        <div className="justify-end flex-col items-end *:w-full">
            {discount ? (
                <>
                    <DiscountPrice price={price.value} discount={discount} />
                    <div className="flex items-center gap-2 justify-end -mt-1">
                        <DiscountBadge discount={discount} />
                        <OldPrice price={price.value} />
                    </div>
                </>
            ) : (
                <Price price={price.value} />
            )}
        </div>
    );
};

export default Prices;

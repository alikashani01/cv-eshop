import DiscountBadge from "./DiscountBadge";

interface Props {
    price: number;
    discount: number;
}

const DiscountedPrice = ({ price, discount }: Props) => {
    const discountedPrice = (price: number, discount: number): string => {
        const discountPrice = (discount / 100) * price;
        const calculatedPrice = price - discountPrice;
        return calculatedPrice.toLocaleString("fa");
    };
    return (
        <div>
            <div className="flex items-center gap-[6px]">
                <DiscountBadge discount={discount} />
                <p className="line-through font-shabmt text-sm text-[#777] tracking-[2px] decoration-rose-600">
                    {price.toLocaleString("fa")}
                </p>
            </div>

            <div className="flex items-center justify-start gap-1">
                <p className="tracking-[2px] text-lg">
                    {discountedPrice(price, discount!)}
                </p>
                <p className="text-[.7rem] text-[#777]">تومان</p>
            </div>
        </div>
    );
};

export default DiscountedPrice;

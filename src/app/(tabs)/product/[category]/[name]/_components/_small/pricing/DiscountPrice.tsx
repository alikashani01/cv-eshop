interface Props {
    price: number;
    discount: number | null | undefined;
}

const DiscountPrice = ({ price, discount }: Props) => {
    if (!discount) return null;
    const discountedPrice = price - (discount / 100) * price;
    return (
        <div className="flex items-center justify-end gap-1">
            <p className="tracking-[.5px] text-xl text-neutral-600 pt-1">
                {discountedPrice.toLocaleString("fa")}
            </p>
            <p className="text-[.7rem] text-[#777777] font-shabt pt-[3px]">
                تومان
            </p>
        </div>
    );
};

export default DiscountPrice;

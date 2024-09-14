const Price = ({ price = 0 }: { price: number }) => {
    return (
        <div className="flex items-center gap-1">
            <p className="tracking-[1px] text-neutral-600">
                {price.toLocaleString("fa")}
            </p>
            <p className="font-shabt text-[.7rem] text-neutral-500">تومان</p>
        </div>
    );
};

export default Price;

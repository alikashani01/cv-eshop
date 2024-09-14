const Price = ({ price }: { price: number }) => {
    return (
        <div className="flex items-center justify-center gap-1">
            <p className="tracking-[2px] text-lg">
                {price.toLocaleString("fa")}
            </p>
            <p className="text-[.7rem] text-[#777]">تومان</p>
        </div>
    );
};

export default Price;

const Price = ({ price }: { price: number }) => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center justify-end gap-1">
                <p className="tracking-[.5px] text-xl text-neutral-600 pt-1">
                    {price.toLocaleString("fa")}
                </p>
                <p className="text-[.7rem] text-neutral-400 font-shabt pt-[3px]">
                    تومان
                </p>
            </div>
        </div>
    );
};

export default Price;

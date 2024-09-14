const Price = ({ price }: { price: number }) => {
    return (
        <div className="flex items-center justify-end flex-grow w-full gap-1">
            <p className="tracking-[1px] text-xl text-neutral-600 pt-1">
                {price.toLocaleString("fa")}
            </p>
            <p className="text-[.7rem] text-neutral-500 font-shabt pt-[3px]">
                تومان
            </p>
        </div>
    );
};

export default Price;

const Price = ({ price }: { price: number }) => {
    return (
        <div className="flex items-center justify-end gap-1">
            <p className="tracking-[.5px] text-neutral-600 text-xl pt-1">
                {price.toLocaleString("fa")}
            </p>
            <p className="text-[.7rem] text-[#777777] font-shabt pt-[3px]">
                تومان
            </p>
        </div>
    );
};

export default Price;

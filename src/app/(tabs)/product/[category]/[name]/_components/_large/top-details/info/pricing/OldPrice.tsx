const OldPrice = ({ price }: { price: number }) => {
    return (
        <p className="text-left tracking-[.5px] text-[1rem] text-neutral-600 font-shabt line-through">
            {price.toLocaleString("fa")}
        </p>
    );
};

export default OldPrice;

const OldPrice = ({ price }: { price: number }) => {
    return (
        <p className="text-left tracking-[.5px] text-[.95rem] text-neutral-300 font-shabt pt-1 line-through">
            {price.toLocaleString("fa")}
        </p>
    );
};

export default OldPrice;

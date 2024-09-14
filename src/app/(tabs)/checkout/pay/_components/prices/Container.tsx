interface Props {
    title: string;
    price: number;
}

const Container = ({ title, price }: Props) => {
    return (
        <div className="flex items-center justify-between px-4 py-3 border-b border-white last:border-none">
            <p className="text-sm text-[.85rem] text-neutral-600">{title}</p>
            <div className="flex items-center gap-1 mt-[-2px]">
                <p className="tracking-[1.5px] text-[1.05rem] text-neutral-800">
                    {price.toLocaleString("fa")}
                </p>
                <p className="text-[.65rem] font-shabt text-[#aaa]">تومان</p>
            </div>
        </div>
    );
};

export default Container;

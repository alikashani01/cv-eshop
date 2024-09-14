import useBagStore from "@/src/queries/order/bag/store";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";

const Details = () => {
    const items = useBagStore((s) => s.items);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    return (
        <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-1">
                <p className="text-2xl text-neutral-700 font-shabb">
                    {convertEngToPer(totalItems)}
                </p>
                <p className="text-[.9rem] font-shabt text-neutral-600">
                    محصول
                </p>
            </div>
            <div className="flex items-center gap-1">
                <p className="text-lg text-neutral-700 tracking-[1px]">
                    {totalPrice.toLocaleString("fa")}
                </p>
                <p className="text-[.75rem] font-shabt text-neutral-600">
                    تومان
                </p>
            </div>
        </div>
    );
};

export default Details;

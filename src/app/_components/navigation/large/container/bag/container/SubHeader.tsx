import useBagStore from "@/src/queries/order/bag/store";
import Link from "next/link";

const SubHeader = () => {
    const items = useBagStore((s) => s.items);
    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    return (
        <div className="sticky top-0 z-10 h-12 flex items-center justify-between p-4 px-5 bg-[#fff5] backdrop-blur-xl rounded-t-2xl border-b border-neutral-200">
            {items.length === 0 ? (
                <p className="w-full flex items-center justify-center text-[.95rem] text-[#555]">
                    سبد خرید خالی است!
                </p>
            ) : (
                <>
                    <Link
                        href="/checkout/shipping-info"
                        className="p-2 px-4 text-sm bg-[#007fff] text-white rounded-2xl"
                    >
                        تسویه حساب
                    </Link>
                </>
            )}
        </div>
    );
};

export default SubHeader;

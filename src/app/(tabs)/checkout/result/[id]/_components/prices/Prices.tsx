import { useParams } from "next/navigation";
import Container from "./Container";
import useFetchOrderDetails from "@/src/queries/order/useFetchOrderDetails";

const Prices = () => {
    const { id } = useParams<{ id: string }>();
    const { data: order } = useFetchOrderDetails(id);
    if (!order) return null;
    const {
        prices: { total, tax, shipping, discount, items },
    } = order;
    return (
        <div className="mt-6 bg-second-theme rounded-2xl">
            <p className="p-4 pb-0 text-[.9rem] text-neutral-500 font-shabt">
                هزینه‌ها
            </p>
            <Container title="محصولات" price={items} />
            <Container title="مالیات" price={tax} />
            <Container title="حمل و نقل" price={shipping} />
            <Container title="تخفیف" price={discount} />
            <Container title="مجموع" price={total} />
        </div>
    );
};

export default Prices;

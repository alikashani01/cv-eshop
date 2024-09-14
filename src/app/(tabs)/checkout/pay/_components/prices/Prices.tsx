"use client";
import useBagStore from "@/src/queries/order/bag/store";
import Container from "./Container";

const Prices = () => {
    const items = useBagStore((s) => s.items);

    const totalItemsPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const shippingPrice = 30000;

    const tax = 9 / 100;
    const taxPrice = totalItemsPrice * tax;

    const totalDiscount =
        items.reduce((acc, item) => acc + item.discount * item.quantity, 0) /
        100;

    const discountPrice = totalItemsPrice * totalDiscount;

    const totalPrice =
        totalItemsPrice + taxPrice + shippingPrice - discountPrice;

    return (
        <div className="mb-8 bg-second-theme shadow-sm shadow-neutral-200 rounded-xl overflow-hidden mt-4">
            <p className="p-4 pb-0 text-[.9rem] text-neutral-500">هزینه‌ها</p>
            <Container title="محصولات" price={totalItemsPrice} />
            <Container title="مالیات" price={taxPrice} />
            <Container title="حمل و نقل" price={shippingPrice} />
            <Container title="تخفیف" price={discountPrice} />
            <Container title="مجموع" price={totalPrice} />
        </div>
    );
};

export default Prices;

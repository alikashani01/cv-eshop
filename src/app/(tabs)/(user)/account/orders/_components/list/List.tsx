"use client";

import useFetchOrders from "@/src/queries/order/useFetchList";
import { convertPerToEng } from "@/src/utils/convertNumberTypes";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Loading from "./Loading";
import Item from "./item/Item";
import OrderDetails from "./order-details/Details";
import Empty from "@/src/app/_components/_modules/Empty";

const List = () => {
    const [orderID, setOrderID] = useState("");
    const handleOpen = (id: string) => setOrderID(id);
    const searchParams = useSearchParams();
    const sort = searchParams.get("sort") || "جدیدترین";
    const status = searchParams.get("status") || "فعال";
    const query = searchParams.get("query") || "";
    const { data: orders, isPending } = useFetchOrders(sort);
    return (
        <>
            <Empty
                message="سفارشی ثبت نکرده‌اید"
                length={orders?.length}
                padding="40px"
            />
            <ul className="p-4 pb-16 lg:p-6 grid md:grid-cols-2 gap-4 lg:gap-6">
                {isPending ? (
                    <Loading />
                ) : (
                    orders?.map((order) =>
                        order.status === status && query
                            ? order.code.includes(convertPerToEng(query)) && (
                                  <Item
                                      key={order._id}
                                      order={order}
                                      onOpen={handleOpen}
                                  />
                              )
                            : order.status === status && (
                                  <Item
                                      key={order._id}
                                      order={order}
                                      onOpen={handleOpen}
                                  />
                              )
                    )
                )}
            </ul>
            <OrderDetails orderID={orderID} onClose={() => handleOpen("")} />
        </>
    );
};

export default List;

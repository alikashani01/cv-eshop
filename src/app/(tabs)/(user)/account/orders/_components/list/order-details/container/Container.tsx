import { Order } from "@/src/queries/order/Entities";
import useFetchOrders from "@/src/queries/order/useFetchList";
import { createContext } from "react";
import Header from "./header/Header";
import Info from "./info/Info";

export const Context = createContext({} as Order);

interface Props {
    orderID: string;
    onClose: () => void;
}

const Container = ({ onClose, orderID }: Props) => {
    const { data: orders } = useFetchOrders();
    const order = orders?.find((o) => o._id === orderID);
    if (!order) return null;
    return (
        <div className="hidden lg:block w-[700px] bg-white h-[80vh] overflow-y-auto no-scrollbar rounded-xl *:p-6">
            <Context.Provider value={order}>
                <Header onClose={onClose} />
                <Info />
            </Context.Provider>
        </div>
    );
};

export default Container;

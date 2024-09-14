import { Order } from "@/src/queries/order/Entities";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { createContext } from "react";
import Code from "./Code";
import Price from "./Price";
import Products from "./Products";
import Status from "./Status";

export const Context = createContext({} as Order);

interface Props {
    onOpen: (id: string) => void;
    order: Order;
}

const Item = ({ order, onOpen }: Props) => {
    const mediaQuery = useMediaQuery("(min-width:1024px)");
    return (
        <Context.Provider value={order}>
            <li
                key={order._id}
                className="rounded-2xl hover:shadow-md transition-all duration-500"
                onClick={() => mediaQuery && onOpen(order._id)}
            >
                <Link
                    href={mediaQuery ? "" : `orders/${order._id}`}
                    className="w-full flex-col overflow-hidden bg-second-theme lg:bg-white rounded-2xl"
                >
                    <div className="w-full h-14 flex items-center pt-[2px] bg-slate-50 shadow-sm shadow-neutral-200 *:flex-1 *:h-full">
                        <Code />
                        <Price />
                        <Status />
                    </div>
                    <Products />
                </Link>
            </li>
        </Context.Provider>
    );
};

export default Item;

"use client";
import { Order } from "@/src/queries/order/Entities";
import useFetchOrderDetails from "@/src/queries/order/useFetchOrderDetails";
import { useParams } from "next/navigation";
import { createContext, PropsWithChildren } from "react";

export const Context = createContext({} as Order);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const { id } = useParams<{ id: string }>();
    const { data: order } = useFetchOrderDetails(id);
    return (
        <Context.Provider value={order || ({} as Order)}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;

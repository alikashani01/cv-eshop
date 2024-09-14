import { useQuery } from "@tanstack/react-query";
import APIClient from "../apiClient";
import { Order } from "./Entities";

const useFetchOrders = (sort?: string) => {
    const apiClinet = new APIClient<unknown, Order[]>("order/list");
    return useQuery({
        queryKey: ["orders", sort],
        queryFn: () => apiClinet.get({ params: { sort } }),
    });
};

export default useFetchOrders;

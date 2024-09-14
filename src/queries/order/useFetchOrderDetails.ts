import { useQuery } from "@tanstack/react-query";
import APIClient from "../apiClient";
import { Order } from "./Entities";

const useFetchOrderDetails = (id: string) => {
    const apiClinet = new APIClient<unknown, Order>("order/details");
    return useQuery({
        queryKey: ["order-details", id],
        queryFn: () => apiClinet.get({ params: { id } }),
        refetchOnWindowFocus: false,
        retry: 1,
    });
};

export default useFetchOrderDetails;

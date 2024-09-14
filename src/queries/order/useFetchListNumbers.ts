import { useQuery } from "@tanstack/react-query";
import APIClient from "../apiClient";

type Orders = {
    active: number;
    delivered: number;
    canceled: number;
    returned: number;
};

const useFetchOrderNumbers = () => {
    const apiClinet = new APIClient<unknown, Orders>("order/numbers");
    return useQuery({
        queryKey: ["order-numbers"],
        queryFn: () => apiClinet.get(),
    });
};

export default useFetchOrderNumbers;

import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../Entities";

const apiClient = new APIClient<unknown, Product[]>(
    "product/featured/top-sales"
);

export default function useFetchTopSalesList() {
    return useQuery({
        queryKey: ["top-sales-products"],
        queryFn: () => apiClient.get(),
    });
}

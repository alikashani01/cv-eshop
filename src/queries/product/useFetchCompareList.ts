import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./Entities";

const apiClient = new APIClient<unknown, Product[]>("product/compare");

export const useFetchCompareList = (productId: string) => {
    return useQuery({
        queryKey: ["compare-products"],
        queryFn: () => apiClient.get({ params: { productId } }),
    });
};

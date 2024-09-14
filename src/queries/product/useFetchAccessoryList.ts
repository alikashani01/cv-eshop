import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./Entities";

const apiClient = new APIClient<unknown, Product[]>(
    "product/list/related-accessories"
);

export default function useFetchAccessoryList(productId: string) {
    return useQuery({
        queryKey: ["related-accessories"],
        queryFn: () => apiClient.get({ params: { productId } }),
    });
}

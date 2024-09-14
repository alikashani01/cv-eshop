import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./Entities";

const apiClient = new APIClient<unknown, Product[]>("product/list/similar");

export default function useFetchSimilarList(productId: string) {
    return useQuery({
        queryKey: ["similar-products"],
        queryFn: () => apiClient.get({ params: { productId } }),
    });
}

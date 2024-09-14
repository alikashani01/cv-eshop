import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Review } from "./Entities";

export default function useFetchReviews(productId: string, sort?: string) {
    const apiClient = new APIClient<unknown, Review[]>("review/list");
    return useQuery({
        queryKey: ["reviews", productId],
        queryFn: () => apiClient.get({ params: { productId, sort } }),
    });
}

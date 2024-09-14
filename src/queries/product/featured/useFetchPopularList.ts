import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../Entities";

const apiClient = new APIClient<unknown, Product[]>("product/featured/popular");

export default function useFetchPopularList() {
    return useQuery({
        queryKey: ["popular-products"],
        queryFn: () => apiClient.get(),
    });
}

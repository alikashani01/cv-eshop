import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./Entities";

export default function useFetchMarqueeList() {
    const apiClient = new APIClient<unknown, Product[]>("product/marquee");
    return useQuery({
        queryKey: ["marquee-products"],
        queryFn: () => apiClient.get(),
    });
}

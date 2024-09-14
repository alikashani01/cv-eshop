import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../Entities";

const apiClient = new APIClient<unknown, Product[]>("product/featured/today");

export default function useFetchTodayList() {
    return useQuery({
        queryKey: ["today-products"],
        queryFn: () => apiClient.get(),
    });
}

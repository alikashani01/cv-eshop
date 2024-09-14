import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../../product/Entities";

export default function useSearch(keyword: string) {
    const apiClient = new APIClient<unknown, Product[]>("product/search");
    return useQuery({
        queryKey: ["search", keyword],
        queryFn: () => apiClient.get({ params: { keyword } }),
        refetchOnWindowFocus: false,
        retry: false,
    });
}

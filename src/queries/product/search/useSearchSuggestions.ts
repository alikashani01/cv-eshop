import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../../product/Entities";

export default function useSearchSuggestions() {
    const apiClient = new APIClient<unknown, Product[]>(
        "product/search/suggestions"
    );
    return useQuery({
        queryKey: ["search-suggestions"],
        queryFn: () => apiClient.get(),
        refetchOnWindowFocus: false,
        retry: false,
    });
}

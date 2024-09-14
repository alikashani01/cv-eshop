import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../Entities";

export default function useFetchSkillList(category: string) {
    const apiClient = new APIClient<unknown, Product[]>(
        "product/featured/skill"
    );
    return useQuery({
        queryKey: ["skill-products", category],
        queryFn: () => apiClient.get({ params: { category } }),
    });
}

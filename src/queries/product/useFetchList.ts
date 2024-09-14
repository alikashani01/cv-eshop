import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./Entities";

export type Query = {
    category: string;
    brands: string[];
};

export default function useFetchProducts(sortOrder: string, queries: Query) {
    const apiClient = new APIClient<unknown, Product[]>("product/list");
    return useQuery({
        queryKey: ["products", sortOrder, queries],
        queryFn: () =>
            apiClient.get({
                params: {
                    sortOrder,
                    queries: JSON.stringify(queries),
                },
            }),
    });
}

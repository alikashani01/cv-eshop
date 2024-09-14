import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Specs } from "./Entities";

const useFetchSpecs = (category: string) => {
    const apiClient = new APIClient<unknown, Specs>("product/specs");
    return useQuery({
        queryKey: ["specs", category],
        queryFn: () => apiClient.get({ params: { category } }),
        staleTime: 60 * 1000 * 60,
    });
};

export default useFetchSpecs;

import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./Entities";

const useFetchProductDetails = (slug: string) => {
    const apiClient = new APIClient<unknown, Product>("product/details");
    return useQuery({
        queryKey: ["product-details", slug],
        queryFn: () => apiClient.get({ params: { slug } }),
    });
};

export default useFetchProductDetails;

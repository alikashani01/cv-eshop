import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../Entities";

const useFetchSavedProducts = () => {
    const apiClient = new APIClient<unknown, Product[]>("product/save");
    return useQuery({
        queryKey: ["saved-products"],
        queryFn: () => apiClient.get(),
    });
};

export default useFetchSavedProducts;

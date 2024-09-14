import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NewReview } from "./Entities";

export default function useCreateReview(productId: string) {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<NewReview, string>("review/create");
    return useMutation({
        mutationFn: (data: NewReview) =>
            apiClient.post(data, { params: { productId } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["product-details", productId],
            });
            queryClient.invalidateQueries({
                queryKey: ["reviews", productId],
            });
            queryClient.invalidateQueries({
                queryKey: ["user-reviews"],
            });
        },
    });
}

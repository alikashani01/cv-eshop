import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteReview(reviewId: string, productId: string) {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("review/user/delete");
    return useMutation({
        mutationFn: () => apiClient.delete({ params: { reviewId } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["reviews", productId],
            });
            queryClient.invalidateQueries({
                queryKey: ["user-reviews"],
            });
            queryClient.invalidateQueries({
                queryKey: ["product-details", productId],
            });
            queryClient.invalidateQueries({
                queryKey: ["review-details", reviewId],
            });
        },
    });
}

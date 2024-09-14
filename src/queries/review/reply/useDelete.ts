import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteReviewReply(
    replyId: string,
    reviewId: string
) {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("review/reply");
    return useMutation({
        mutationFn: () => apiClient.delete({ params: { reviewId, replyId } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["review-replies", reviewId],
            });
        },
    });
}

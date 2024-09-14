import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function useCreateReviewReply(
    reviewId: string,
    productId?: string
) {
    const sort = useSearchParams().get("sort") || "جدیدترین";
    const queryClient = useQueryClient();
    const apiClient = new APIClient<{ content: string }, string>(
        "review/reply"
    );
    return useMutation({
        mutationFn: (data: string) =>
            apiClient.post({ content: data }, { params: { reviewId } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["review-replies", reviewId],
            });
            queryClient.invalidateQueries({
                queryKey: ["reviews", productId, sort],
            });
        },
    });
}

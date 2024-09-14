import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Reply } from "../Entities";

export default function useFetchReviewReplies(reviewId: string) {
    const apiClient = new APIClient<unknown, Reply[]>("review/reply");
    return useQuery({
        queryKey: ["review-replies", reviewId],
        queryFn: () => apiClient.get({ params: { reviewId } }),
    });
}

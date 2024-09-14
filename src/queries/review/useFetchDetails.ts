import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Review } from "./Entities";

export default function useFetchReviewDetails(reviewId: string) {
    const apiClient = new APIClient<unknown, Review>("review/details");
    return useQuery({
        queryKey: ["review-details", reviewId],
        queryFn: () => apiClient.get({ params: { reviewId } }),
    });
}

import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Review } from "./Entities";

export default function useFetchUserReviews() {
    const apiClient = new APIClient<unknown, Review[]>("review/user/list");
    return useQuery({
        queryKey: ["user-reviews"],
        queryFn: () => apiClient.get(),
    });
}

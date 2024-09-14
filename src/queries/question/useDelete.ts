import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useDeleteQuestion = (questionId: string, productId: string) => {
    const sort = useSearchParams().get("sort") || "جدیدترین";
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("question/user/delete");
    return useMutation({
        mutationFn: () => apiClient.delete({ params: { questionId } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["questions", productId, sort],
            });
            queryClient.invalidateQueries({
                queryKey: ["user-questions"],
            });
            queryClient.invalidateQueries({
                queryKey: ["product-details", productId],
            });
            queryClient.invalidateQueries({
                queryKey: ["question-details", questionId],
            });
        },
    });
};

export default useDeleteQuestion;

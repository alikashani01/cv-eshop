import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useDeleteQuestionReply = (
    replyId: string,
    questionId: string,
    productId?: string
) => {
    const sort = useSearchParams().get("sort") || "جدیدترین";
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("question/reply");
    return useMutation({
        mutationFn: () => apiClient.delete({ params: { questionId, replyId } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["question-details", questionId],
            });
            queryClient.invalidateQueries({
                queryKey: ["question-replies", questionId],
            });
            queryClient.invalidateQueries({
                queryKey: ["questions", productId, sort],
            });
            queryClient.invalidateQueries({
                queryKey: ["user-questions"],
            });
        },
    });
};

export default useDeleteQuestionReply;

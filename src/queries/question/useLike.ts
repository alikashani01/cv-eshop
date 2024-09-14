import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useLikeQuestion = (questionId: string, productId: string) => {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("question/like");
    return useMutation({
        mutationFn: () => apiClient.patch({}, { params: { questionId } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["questions", productId],
            });
            queryClient.invalidateQueries({
                queryKey: ["question-details", questionId],
            });
        },
    });
};

export default useLikeQuestion;

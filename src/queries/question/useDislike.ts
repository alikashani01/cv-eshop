import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDisLikeQuestion = (questionId: string, productId: string) => {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("question/dislike");
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

export default useDisLikeQuestion;

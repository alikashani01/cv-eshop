import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateQuestionReply = (
    questionId: string,
    productId?: string,
    slug?: string
) => {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<{ content: string }, string>(
        "question/reply"
    );

    return useMutation({
        mutationFn: (content: string) =>
            apiClient.post({ content }, { params: { questionId } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["question-replies", questionId],
            });
            queryClient.invalidateQueries({
                queryKey: ["questions", productId],
            });
            queryClient.invalidateQueries({
                queryKey: ["product-details", slug],
            });
        },
    });
};

export default useCreateQuestionReply;

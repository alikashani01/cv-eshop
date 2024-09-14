import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NewQuestion } from "./Entities";

const useCreateQuestion = (productId: string) => {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<NewQuestion, string>("question/create");
    return useMutation({
        mutationFn: (data: NewQuestion) =>
            apiClient.post(data, { params: { productId } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["product-details", productId],
            });
            queryClient.invalidateQueries({
                queryKey: ["questions", productId],
            });
            queryClient.invalidateQueries({
                queryKey: ["user-questions"],
            });
        },
    });
};

export default useCreateQuestion;

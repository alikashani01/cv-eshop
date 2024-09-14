import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Question } from "./Entities";

const useFetchQuestions = (productId: string, sort?: string) => {
    const apiClient = new APIClient<unknown, Question[]>("question/list");
    return useQuery({
        queryKey: ["questions", productId, sort],
        queryFn: () => apiClient.get({ params: { productId, sort } }),
    });
};

export default useFetchQuestions;

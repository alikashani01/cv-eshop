import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Question } from "./Entities";

const useFetchQuestionDetails = (questionId: string) => {
    const apiClient = new APIClient<unknown, Question>("question/details");
    return useQuery({
        queryKey: ["question-details", questionId],
        queryFn: () => apiClient.get({ params: { questionId } }),
    });
};

export default useFetchQuestionDetails;

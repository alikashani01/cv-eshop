import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Reply } from "../Entities";

const useFetchQuestionReplies = (questionId: string, sort?: string) => {
    const apiClient = new APIClient<unknown, Reply[]>("question/reply");
    return useQuery({
        queryKey: ["question-replies", questionId],
        queryFn: () => apiClient.get({ params: { questionId, sort } }),
    });
};

export default useFetchQuestionReplies;

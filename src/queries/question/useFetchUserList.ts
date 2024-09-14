import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Question } from "./Entities";

const useFetchUserQuestions = () => {
    const apiClient = new APIClient<unknown, Question[]>("question/user/list");
    return useQuery({
        queryKey: ["user-questions"],
        queryFn: () => apiClient.get(),
    });
};

export default useFetchUserQuestions;

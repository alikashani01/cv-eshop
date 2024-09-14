import APIClient from "@/src/queries/apiClient";
import { useQuery } from "@tanstack/react-query";
import { User } from "../Entities";

const useFetchUserDetails = () => {
    const apiClient = new APIClient<unknown, User>("user/profile/details");
    return useQuery({
        queryKey: ["user-details"],
        queryFn: () => apiClient.get(),
    });
};

export default useFetchUserDetails;

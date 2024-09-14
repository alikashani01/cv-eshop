import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Login } from "../Entities";

const useAdd = () => {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<Login, string>("user/login/add");
    const addMobile = useMutation({
        mutationFn: (data: Login) => apiClient.post(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            });
        },
    });
    return addMobile;
};

export default useAdd;

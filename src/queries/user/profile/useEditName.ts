import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditName = () => {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<{ fullName: string }, string>(
        "user/profile/name"
    );
    const editName = useMutation({
        mutationFn: (fullName: string) => apiClient.patch({ fullName }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            }),
    });
    return editName;
};

export default useEditName;

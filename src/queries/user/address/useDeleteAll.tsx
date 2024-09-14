import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteAllLocations() {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("user/address/delete-all");
    return useMutation({
        mutationFn: () => apiClient.delete(),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            });
        },
    });
}

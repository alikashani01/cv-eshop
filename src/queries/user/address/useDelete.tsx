import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteAddress(id: string) {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("user/address/delete");
    return useMutation({
        mutationFn: () => apiClient.delete({ params: { id } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            });
        },
    });
}

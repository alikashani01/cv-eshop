import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDefaultAddress(id: string) {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("user/address/default");
    return useMutation({
        mutationFn: () => apiClient.patch({}, { params: { id } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            });
        },
    });
}

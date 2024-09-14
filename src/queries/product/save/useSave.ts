import APIClient from "@/src/queries/apiClient";
import { QueryClient, useMutation } from "@tanstack/react-query";

const useSave = (id: string) => {
    const queryClient = new QueryClient();
    const apiClient = new APIClient<unknown, string>("product/save");
    const save = useMutation({
        mutationFn: () => apiClient.patch({}, { params: { id } }),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ["saved-products"],
            }),
    });
    return save;
};

export default useSave;

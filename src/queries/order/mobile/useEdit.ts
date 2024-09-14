import APIClient from "@/src/queries/apiClient";
import { useMutation } from "@tanstack/react-query";

export default function useEditMobile() {
    const apiClient = new APIClient<{ mobile: string }, string>(
        "order/mobile/edit"
    );
    return useMutation({
        mutationFn: (data: string) => apiClient.patch({ mobile: data }),
    });
}

import APIClient from "@/src/queries/apiClient";
import { useMutation } from "@tanstack/react-query";

export default function useVerifyMobile() {
    const apiClient = new APIClient<{ otp: string }, string>(
        "order/mobile/verify"
    );
    return useMutation({
        mutationFn: (data: string) => apiClient.patch({ otp: data }),
    });
}

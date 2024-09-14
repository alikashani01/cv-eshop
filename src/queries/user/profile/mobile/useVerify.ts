import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useVerifyMobile = () => {
    const queryClient = useQueryClient();
    const apiClient = new APIClient<{ otp: string }, string>(
        "user/profile/mobile/verify"
    );
    const verify = useMutation({
        mutationFn: (otp: string) => apiClient.patch({ otp }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            });
        },
    });
    return verify;
};

export default useVerifyMobile;

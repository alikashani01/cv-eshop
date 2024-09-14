import APIClient from "@/src/queries/apiClient";
import { useMutation } from "@tanstack/react-query";

const useEditMobile = () => {
    const apiClient = new APIClient<{ mobile: string }, string>(
        "user/profile/mobile/edit"
    );
    const edit = useMutation({
        mutationFn: (data: string) => apiClient.patch({ mobile: data }),
    });
    return edit;
};

export default useEditMobile;

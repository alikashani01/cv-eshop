import APIClient from "@/src/queries/apiClient";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useDeleteAccount = () => {
    const { replace } = useRouter();
    const apiClient = new APIClient<unknown, string>("user/delete");
    const deleteAccount = useMutation({
        mutationFn: () => apiClient.delete(),
        onSuccess: () => replace("/"),
    });
    return deleteAccount;
};

export default useDeleteAccount;

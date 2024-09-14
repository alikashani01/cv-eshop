import APIClient from "@/src/queries/apiClient";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Login } from "../Entities";

const useVerify = () => {
    const { replace, refresh } = useRouter();
    const apiClient = new APIClient<Login, string>("user/login/verify");
    const register = useMutation({
        mutationFn: (data: Login) => apiClient.post(data),
        onSuccess: () => {
            replace("/account/dashboard");
            refresh();
        },
    });
    return register;
};

export default useVerify;

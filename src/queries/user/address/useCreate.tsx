import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Address } from "../Entities";

export default function useCreateAddress() {
    const { back } = useRouter();
    const queryClient = useQueryClient();
    const apiClient = new APIClient<Address, string>("user/address/create");
    return useMutation({
        mutationFn: (data: Address) => apiClient.post(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            });
            back();
        },
    });
}

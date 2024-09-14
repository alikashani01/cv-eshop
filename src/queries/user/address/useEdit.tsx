import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Address } from "../Entities";

export default function useEditAddress(id: string) {
    const { back } = useRouter();
    const queryClient = useQueryClient();
    const apiClient = new APIClient<Address, string>("user/address/edit");
    return useMutation({
        mutationFn: (data: Address) =>
            apiClient.patch(data, { params: { id } }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["user-details"],
            });
            back();
        },
    });
}

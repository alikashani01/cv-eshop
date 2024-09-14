import APIClient from "@/src/queries/apiClient";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Order, PayOrder } from "./Entities";
import useBagStore from "./bag/store";

export default function usePayOrder() {
    const router = useRouter();
    const removeItems = useBagStore((s) => s.setRemoveAll);
    const apiClient = new APIClient<PayOrder, Order>("order/pay");
    return useMutation({
        mutationFn: (data: PayOrder) => apiClient.post(data),
        onSuccess: (data) => {
            removeItems();
            localStorage.removeItem("shippingInfo");
            router.replace(`/checkout/result/${data._id}`);
        },
    });
}

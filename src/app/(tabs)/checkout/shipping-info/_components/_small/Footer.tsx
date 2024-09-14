import useBagStore from "@/src/queries/order/bag/store";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "../../_Context";

const Footer = () => {
    const router = useRouter();
    const { data } = useContext(Context);
    const setShippingInfo = useBagStore((s) => s.setShippingInfo);
    const handleSubmit = () => {
        setShippingInfo(data);
        router.push("pay");
    };
    return (
        <div className="w-full h-14 p-1 px-2 fixed bottom-0 left-0 z-20 backdrop-blur-sm">
            <button
                className="w-full h-full bg-blue rounded-2xl text-white"
                onClick={handleSubmit}
            >
                ثبت و ادامه
            </button>
        </div>
    );
};

export default Footer;

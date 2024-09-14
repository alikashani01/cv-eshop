import useBagStore from "@/src/queries/order/bag/store";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "../../_Context";

const Header = () => {
    const router = useRouter();
    const { data } = useContext(Context);
    const setShippingInfo = useBagStore((s) => s.setShippingInfo);
    const handleSubmit = () => {
        setShippingInfo(data);
        router.push("pay");
    };
    return (
        <div className="h-20 sticky top-12 left-0 z-10 flex items-center justify-between bg-[#fff5] backdrop-blur-xl border-b border-neutral-100 px-[5%] lg:px-[8%]">
            <div>
                <p className="text text-neutral-500">تسویه حساب</p>
                <p className="text-lg text-neutral-600 mt-[2px]">
                    اطلاعات حمل و نقل
                </p>
            </div>
            <button
                className="bg-blue-600 rounded-2xl p-2 px-6 text-[.95rem] text-white"
                onClick={handleSubmit}
            >
                ثبت و ادامه
            </button>
        </div>
    );
};

export default Header;

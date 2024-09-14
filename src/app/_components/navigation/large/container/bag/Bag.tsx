import useBagStore from "@/src/queries/order/bag/store";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import Image from "next/image";
import { useContext } from "react";
import { NavContext } from "../../_Context";
import Container from "./container/Container";

const Bag = () => {
    const { onOpenBag } = useContext(NavContext);
    const items = useBagStore((s) => s.items);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <>
            <button onClick={onOpenBag} className="relative">
                <Image width={23} height={23} src="/icons/nav/bag.png" alt="" />
                {totalItems > 0 && (
                    <span className="absolute -left-2 -bottom-2 bg-rose-500 w-5 h-5 font-shabt text-[.8rem] pt-[2px] rounded-full text-white flex items-center justify-center">
                        {convertEngToPer(totalItems)}
                    </span>
                )}
            </button>
            <Container />
        </>
    );
};

export default Bag;

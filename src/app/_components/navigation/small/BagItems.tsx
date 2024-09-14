import { convertEngToPer } from "@/src/utils/convertNumberTypes";

const BagItems = ({ items, href }: { href: string; items: number }) => {
    return (
        items > 0 &&
        href === "/bag" && (
            <p className="w-[22px] h-[22px] absolute -left-[2px] -bottom-[3px] flex items-center justify-center bg-[#555555] pt-[3px] text-white rounded-full text-[.9rem]">
                {convertEngToPer(items)}
            </p>
        )
    );
};

export default BagItems;

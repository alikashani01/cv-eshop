import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import Image from "next/image";
import Link from "next/link";

interface Props {
    icon: string;
    iconSize: number;
    title: string;
    nums: number;
}

const Container = ({ icon, iconSize, title, nums }: Props) => {
    return (
        <Link
            href={`orders?status=${title}`}
            className="h-20 rounded-2xl p-2 pt-4 bg-second-theme transition-all duration-300 flex flex-col items-center justify-center"
        >
            <div className="flex items-center gap-3">
                <Image width={iconSize} height={iconSize} src={icon} alt="" />
                <p className="text-neutral-600 text-[.92rem]">{title}</p>
            </div>
            <p className="text-2xl text-neutral-700 tracking-widest">
                {nums !== undefined ? convertEngToPer(nums!) : "۰"}
            </p>
        </Link>
    );
};

export default Container;

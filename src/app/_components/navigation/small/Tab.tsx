"use client";
import useBagStore from "@/src/queries/order/bag/store";
// import useBagStore from "@/queries/order/bag/store";
import dynamic from "next/dynamic";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
const BagItems = dynamic(() => import("./BagItems"), { ssr: false });

interface Props {
    active: boolean;
    href: string;
    icon: string | StaticImageData;
    activeIcon: string;
    width: number;
    height: number;
    bagItems?: number;
}

const Tab = ({ active, href, icon, activeIcon, width, height }: Props) => {
    const items = useBagStore((s) => s.items);

    return (
        <li className="w-full h-full flex items-center justify-center">
            <Link href={href} className="w-full h-full">
                <div className="relative w-10 flex items-center justify-center">
                    <Image
                        width={width}
                        height={height}
                        src={active ? activeIcon : icon}
                        alt=""
                        priority
                    />
                    <BagItems items={items.length || 0} href={href} />
                </div>
            </Link>
        </li>
    );
};

export default Tab;

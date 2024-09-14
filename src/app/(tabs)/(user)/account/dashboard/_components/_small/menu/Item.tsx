import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Image from "next/image";
import Link from "next/link";

type Item = {
    title: string;
    href: string;
    icon: string;
    iconBg: string;
    orders?: number;
    noDivider?: boolean;
};

const Item = ({ item }: { item: Item }) => {
    return (
        <li className="bg-second-theme rounded-full mb-2">
            <Link
                href={item.href}
                className="h-[50px] justify-between px-2 pl-4"
            >
                <div className="flex items-center gap-3">
                    <div
                        className={`${item.iconBg} rounded-full w-8 h-8 flex items-center justify-center p-[6px]`}
                    >
                        <Image
                            width={32}
                            height={32}
                            src={item.icon}
                            alt=""
                            className="object-contain"
                        />
                    </div>
                    <p className="text-[.92rem] text-neutral-600">
                        {item.title}
                    </p>
                </div>
                <ArrowBackIosNewRoundedIcon
                    sx={{ fontSize: "1rem", color: "#888888" }}
                />
            </Link>
        </li>
    );
};

export default Item;

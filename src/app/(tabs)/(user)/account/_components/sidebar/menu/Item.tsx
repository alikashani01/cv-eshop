import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Image from "next/image";
import Link from "next/link";

type Item = {
    title: string;
    href: string;
    icon: string;
    iconBg: string;
    orders?: number;
};

const Item = ({ item }: { item: Item }) => {
    return (
        <li className="bg-white rounded-full mb-2">
            <Link
                href={item.href}
                className="justify-between p-[10px] px-3 pl-4"
            >
                <div className="flex items-center gap-3 text-neutral-700">
                    <div className="bg-neutral-200 rounded-full w-8 h-8 flex items-center justify-center p-2">
                        <Image
                            width={32}
                            height={32}
                            src={item.icon}
                            alt=""
                            className="object-contain"
                        />
                    </div>
                    <p className="text-sm text-neutral-700">{item.title}</p>
                </div>
                <ArrowBackIosNewRoundedIcon
                    sx={{ fontSize: "1rem", color: "#666" }}
                />
            </Link>
        </li>
    );
};

export default Item;

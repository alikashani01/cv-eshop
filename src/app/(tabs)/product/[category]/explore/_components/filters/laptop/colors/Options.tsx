import { laptopColors } from "@/data/specs/colors";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Options = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [items, setItems] = useState<string[]>([]);
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams.toString());
    useEffect(() => {
        setItems(params.getAll("color"));
    }, [searchParams]);
    const removeColor = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        const newcolors = params
            .getAll("color")
            .filter((color) => color !== value);
        params.delete("color");
        newcolors.forEach((color) => params.append("color", color));
        router.push(`${pathname}?${params.toString()}`);
    };
    return (
        <ul className="px-4 pb-4 grid grid-cols-5">
            {laptopColors.map((item, index) => (
                <li key={index} className="my-3">
                    {items.includes(item.nameFa) ? (
                        <button
                            onClick={() => removeColor(item.nameFa)}
                            className="justify-between"
                        >
                            <div
                                style={{
                                    border: "2px solid #0288e0",
                                }}
                                className=" rounded-full"
                            >
                                <div
                                    style={{
                                        background: item.code,
                                        border: "2px solid #fff",
                                    }}
                                    className="flex border-4 border-blue-600 items-center gap-3 w-8 h-8 rounded-full"
                                />
                            </div>
                        </button>
                    ) : (
                        <Link
                            href={`?color=${item.nameFa}&${params.toString()}`}
                            className="justify-between"
                        >
                            <div
                                style={{
                                    background: item.code,
                                }}
                                className="flex items-center border-4 border-gray-200 gap-3 w-8 h-8 rounded-full"
                            ></div>
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Options;

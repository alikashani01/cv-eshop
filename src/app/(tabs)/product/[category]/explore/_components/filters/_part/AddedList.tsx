import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
    title: string;
}
const AddedList = ({ title }: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [list, setList] = useState<string[]>([]);
    const pathname = usePathname();
    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        setList(params.getAll(title));
    }, [searchParams]);
    const removeItem = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        const newItems = params.getAll(title).filter((i) => i !== value);
        params.delete(title);
        newItems.forEach((i) => params.append(title, i));
        router.push(`${pathname}?${params.toString()}`);
    };
    return (
        <ul className="px-4 flex flex-wrap items-center gap-2">
            {list.map((item, index) => (
                <li
                    key={index}
                    className="rounded-md text-sm text-neutral-600"
                    onClick={() => removeItem(item)}
                >
                    <p className="font-shabt text-sm">{item}</p>
                </li>
            ))}
        </ul>
    );
};

export default AddedList;

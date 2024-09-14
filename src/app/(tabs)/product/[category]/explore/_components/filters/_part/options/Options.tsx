import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Item from "./Item";

interface Props {
    options: {
        nameFa?: string;
        nameEn?: string;
        code?: string;
        manufacturer?: string;
        value?: string;
        unit?: string;
    }[];
    title: string;
}

const Options = ({ options, title }: Props) => {
    const router = useRouter();

    const pathname = usePathname();

    const searchParams = useSearchParams();

    const [items, setItems] = useState<string[]>([]);

    const params = new URLSearchParams(searchParams.toString());

    useEffect(() => {
        setItems(params.getAll(title));
    }, [searchParams]);

    const addItem = (value: string) => {
        router.push(`?${title}=${value}&${params.toString()}`);
    };

    const removeItem = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        const newItems = params.getAll(title).filter((i) => i !== value);
        params.delete(title);
        newItems.forEach((i) => params.append(title, i));
        router.push(`${pathname}?${params.toString()}`);
    };

    const handleItem = (value: string) => {
        if (items.includes(value)) {
            removeItem(value);
        } else {
            addItem(value);
        }
    };

    return (
        <ul className="px-4 pb-4">
            {options.map((item, index) => (
                <Item key={index} item={item} title={title} items={items} />
            ))}
        </ul>
    );
};

export default Options;

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import EnglishName from "./EnglishName";
import Name from "./Name";
import SelectBadge from "./SelectBadge";

interface Props {
    item: {
        nameFa?: string;
        nameEn?: string;
        code?: string;
        manufacturer?: string;
        value?: string;
        unit?: string;
    };
    title: string;
    items: string[];
}

const Item = ({ item, title, items }: Props) => {
    const router = useRouter();

    const searchParams = useSearchParams();

    const pathname = usePathname();

    const params = new URLSearchParams(searchParams.toString());

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

    const isSelected = items.includes(item.nameFa! || item.nameEn!);
    return (
        <li className="my-4">
            <button
                onClick={() => handleItem(item.nameFa || item.nameEn || "")}
                className="w-full justify-between"
            >
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3 text-right">
                        <SelectBadge isSelected={isSelected} />
                        <Name
                            nameFa={item.nameFa}
                            nameEn={item.nameEn}
                            manufacturer={item.manufacturer}
                        />
                    </div>
                    <EnglishName
                        isExists={item.nameEn && item.nameFa ? true : false}
                        nameEn={item.nameEn}
                    />
                </div>
            </button>
        </li>
    );
};

export default Item;

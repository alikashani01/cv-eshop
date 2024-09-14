import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    item: { label: string; href: string };
}

export default function Item({ item }: Props) {
    const pathname = usePathname();
    return (
        <Link
            className="p-3 px-4 text-[.9rem] text-neutral-500 border-b border-neutral-200 last:border-none"
            href={`${pathname}/${item.href}`}
        >
            {item.label}
        </Link>
    );
}

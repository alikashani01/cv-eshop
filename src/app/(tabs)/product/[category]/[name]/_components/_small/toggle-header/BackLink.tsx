import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const BackLink = () => {
    const lastPath = useSearchParams().get("lastPath") || "explore";
    const query = useSearchParams().get("query");
    return (
        <div>
            <Link
                className="bg-white w-[33px] h-[33px] rounded-full pl-[2px]"
                href={query ? `/search?query=${query}` : lastPath}
            >
                <Image
                    width={19}
                    height={19}
                    src="/icons/arrow/right-b.png"
                    alt=""
                    priority
                />
            </Link>
        </div>
    );
};

export default BackLink;

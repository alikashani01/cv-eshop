import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Header = () => {
    const params = useSearchParams();
    const query = params.get("query");
    const lastPath = params.get("lastPath");
    const backLink = query ? `/search?query=${query}` : lastPath || "/";
    return (
        <header className="h-12 flex items-center justify-between px-4 *:flex *:items-center *:flex-1">
            <div>
                <Link
                    className="w-[33px] h-[33px] rounded-full bg-second-theme pl-[2px]"
                    href={backLink}
                >
                    <Image
                        width={19}
                        height={19}
                        src="/icons/arrow/right-b.png"
                        alt=""
                    />
                </Link>
            </div>
            <p className="!flex-[2] justify-center text-[.95rem] text-neutral-500">
                جزییات محصول
            </p>
            <div />
        </header>
    );
};

export default Header;

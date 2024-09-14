import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const lastPath = new URLSearchParams().get("lastPath") || "shipping-info";
    return (
        <header className="h-12 flex items-center justify-between *:flex *:items-center *:flex-1 px-4">
            <div>
                <Link href={lastPath} className="font-shabt text-sm">
                    <Image
                        width={18}
                        height={18}
                        src="/icons/arrow/right-b.png"
                        alt=""
                    />
                    حمل و نقل
                </Link>
            </div>
            <p className="justify-center text-neutral-500">تسویه حساب</p>
            <div />
        </header>
    );
};

export default Header;

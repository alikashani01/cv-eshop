import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-10 h-12 flex items-center justify-between bg-[#f5f5f555] border-b border-neutral-100 backdrop-blur-xl px-4 *:flex *:items-center *:flex-1">
            <div>
                <Link
                    href="/account/dashboard"
                    className="w-[32px] h-[32px] bg-neutral-100 pl-[2px] rounded-full"
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
            <div className="justify-center text-neutral-600">اطلاعات شخصی</div>
            <div className="justify-end"></div>
        </header>
    );
};

export default Header;

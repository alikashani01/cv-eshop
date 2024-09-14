import Link from "next/link";

const Header = () => {
    return (
        <div className="ltr  top-0 lg:top-12 left-0 z-10 py-6 flex items-center flex-col justify-between px-4 lg:px-[8%]">
            <p className="text-xl lg:text-2xl text-rose-500 font-sfb">
                iPad Pro M4 2024
            </p>
            <Link className="text-sm" href={``}>
                پیش سفارش
            </Link>
        </div>
    );
};

export default Header;

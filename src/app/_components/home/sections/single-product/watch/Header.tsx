import Link from "next/link";

const Header = () => {
    return (
        <div className="ltr sticky top-0 lg:top-12 left-0 z-10 h-14 flex items-center justify-between px-4 lg:px-[8%] bg-second-theme">
            <p className="text-xl lg:text-2xl text-rose-500 font-sfb">
                iWatch Series 10
            </p>
            <Link className="text-sm" href={``}>
                پیش سفارش
            </Link>
        </div>
    );
};

export default Header;

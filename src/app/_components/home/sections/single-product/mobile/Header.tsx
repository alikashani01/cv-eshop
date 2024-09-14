import Link from "next/link";

const Header = () => {
    return (
        <div className="ltr sticky top-0 lg:top-12 left-0 z-10 h-14 flex items-center justify-between px-4 lg:px-[8%]  backdrop-blur-xl">
            <p className="text-xl lg:text-2xl text-[#DDBBA7] font-sfreg">
                iPhone 16 Pro
            </p>
            <Link className="text-sm" href={``}>
                پیش سفارش
            </Link>
        </div>
    );
};

export default Header;

import Link from "next/link";
import Details from "./Details";

const Header = () => {
    return (
        <div className="sticky top-0 z-10 p-4 px-5 bg-[#fff5] backdrop-blur-xl rounded-t-2xl border-b border-neutral-200">
            <Details />
            <Link
                href="/checkout/shipping-info"
                className="p-2 px-4 mt-1 text-sm bg-[#007fff] text-white rounded-2xl"
            >
                تسویه حساب
            </Link>
        </div>
    );
};

export default Header;

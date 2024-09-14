"use client";
import dynamic from "next/dynamic";
import { useParams, usePathname } from "next/navigation";
const Tab = dynamic(() => import("./Tab"), { ssr: false });

const NavigationSmall = () => {
    const { category, name, id } = useParams<{
        category: string;
        name: string;
        id: string;
    }>();
    const pathname = usePathname();

    // Hide Navigation
    const isHidden =
        pathname.includes(`/product/${category}/${name}`) ||
        pathname.includes("address/new") ||
        pathname.includes(`address/${id}`) ||
        pathname === "/checkout/shipping-info" ||
        pathname === "/checkout/pay";

    // Current Active Page
    const accountActive =
        pathname.includes("account") || pathname.includes("signin");
    const bagActive = pathname.includes("bag");
    const productsActive = pathname.includes("product");
    const homeActive = pathname === "/";
    const searchActive = pathname === "/search";

    return (
        !isHidden && (
            <ul className="lg:hidden fixed bottom-0 left-0 z-10 w-full h-11 flex items-center justify-between *:flex-1 bg-[#fafafaaa] border-t border-neutral-100 backdrop-blur-2xl *:relative">
                <div className="pt-[1px]">
                    {accountActive ? (
                        <Tab
                            href="/account/dashboard"
                            icon="/icons/nav/account.png"
                            activeIcon="/icons/nav/account-a.png"
                            width={30}
                            height={30}
                            active={true}
                        />
                    ) : (
                        <Tab
                            href="/account/dashboard"
                            icon="/icons/nav/account.png"
                            activeIcon="/icons/nav/account-a.png"
                            width={28}
                            height={28}
                            active={false}
                        />
                    )}
                </div>

                <Tab
                    href="/bag"
                    icon="/icons/nav/bag.png"
                    activeIcon="/icons/nav/bag-a.png"
                    width={29}
                    height={29}
                    active={bagActive}
                />

                {searchActive ? (
                    <Tab
                        href="/search"
                        icon="/icons/nav/search.png"
                        activeIcon="/icons/nav/search-a.png"
                        width={31}
                        height={31}
                        active={true}
                    />
                ) : (
                    <Tab
                        href="/search"
                        icon="/icons/nav/search.png"
                        activeIcon="/icons/nav/search-a.png"
                        width={34}
                        height={34}
                        active={false}
                    />
                )}

                <Tab
                    href={`/product/categories?lastPath=${pathname}`}
                    icon="/icons/nav/categories.png"
                    activeIcon="/icons/nav/categories-a.png"
                    width={29}
                    height={29}
                    active={productsActive}
                />

                <Tab
                    href="/"
                    icon="/icons/nav/home.png"
                    activeIcon="/icons/nav/home-a.png"
                    width={31}
                    height={31}
                    active={homeActive}
                />
            </ul>
        )
    );
};

export default NavigationSmall;

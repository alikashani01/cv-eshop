"use client";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import AddressesLink from "./addresses-link/AddressesLink";
import Loader from "./Loader";
import Logout from "./Logout";
import Menu from "./menu/Menu";
import Orders from "./orders/Orders";
import UserInfo from "./user-info/UserInfo";

const SmallScreen = () => {
    const { isPending } = useFetchUserDetails();
    return (
        <div className="md:hidden flex flex-col gap-4 p-4 pb-20">
            {isPending ? (
                <Loader />
            ) : (
                <>
                    <UserInfo />
                    <Logout />
                    <Orders />
                    <AddressesLink />
                    <Menu />
                </>
            )}
        </div>
    );
};

export default SmallScreen;

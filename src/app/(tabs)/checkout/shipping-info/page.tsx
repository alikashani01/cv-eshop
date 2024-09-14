"use client";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import ContextProvider from "./_Context";
import LargeScreen from "./_components/_large/LargeScreen";
import SmallScreen from "./_components/_small/SmallScreen";
import Registration from "./_components/registration/Registration";

const CheckoutShippingInfoPage = () => {
    const { data: user, isPending } = useFetchUserDetails();
    return (
        <ContextProvider>
            {user ? (
                <>
                    <SmallScreen />
                    <LargeScreen />
                </>
            ) : (
                !isPending && <Registration />
            )}
        </ContextProvider>
    );
};

export default CheckoutShippingInfoPage;

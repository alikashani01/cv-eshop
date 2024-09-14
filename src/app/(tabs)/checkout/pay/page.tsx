import { getSession } from "@/authentication";
import LargeScreen from "./_components/_large/LargeScreen";
import SmallScreen from "./_components/_small/SmallScreen";
import { redirect } from "next/navigation";

const CheckoutPayPage = async () => {
    const session = await getSession();
    if (!session) return redirect("shipping-info");
    return (
        <>
            <SmallScreen />
            <LargeScreen />
        </>
    );
};

export default CheckoutPayPage;

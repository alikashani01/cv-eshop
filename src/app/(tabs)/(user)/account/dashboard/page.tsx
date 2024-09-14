import { Metadata } from "next";
import Large from "./_components/_large/Large";
import SmallScreen from "./_components/_small/Small";

const DashboardPage = async () => {
    return (
        <>
            <SmallScreen />
            <Large />
        </>
    );
};

export const metadata: Metadata = {
    title: "Tech Shop | حساب کاربری",
};

export default DashboardPage;

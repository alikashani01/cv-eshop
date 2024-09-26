import { PropsWithChildren } from "react";
import CompleteRegister from "./_components/complete-register/CompleteRegister";
import Sidebar from "./_components/sidebar/Sidebar";

const getData = () => {
    return new Date().toLocaleString();
};

const DashboardLayout = async ({ children }: PropsWithChildren) => {
    const now = getData();
    return (
        <div className="flex lg:gap-2 lg:pt-14 lg:p-2 overflow-x-hidden">
            <Sidebar />
            <div className="w-full">{children}</div>
            <CompleteRegister />
        </div>
    );
};

export default DashboardLayout;

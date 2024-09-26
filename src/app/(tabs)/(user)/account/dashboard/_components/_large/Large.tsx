import dynamic from "next/dynamic";
import LargeScreenContainer from "../../../_components/LargeScreenContainer";
import Addresses from "./addresses/Addresses";
import PersonalInfo from "./personal-info/PersonalInfo";
const LatestVisited = dynamic(() => import("./latest-visited/LatestVisited"), {
    ssr: false,
});

const Large = () => {
    return (
        <LargeScreenContainer>
            <p className="text-[1.05rem]">حساب کاربری</p>
            <div className="lg:flex gap-6 p-6 *:flex-1">
                <div>
                    <PersonalInfo />
                    <Addresses />
                </div>
                <LatestVisited />
            </div>
        </LargeScreenContainer>
    );
};

export default Large;

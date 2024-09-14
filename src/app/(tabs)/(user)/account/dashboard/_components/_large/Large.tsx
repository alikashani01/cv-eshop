import LargeScreenContainer from "../../../_components/LargeScreenContainer";
import Addresses from "./addresses/Addresses";
import LatestVisited from "./latest-visited/LatestVisited";
import PersonalInfo from "./personal-info/PersonalInfo";

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

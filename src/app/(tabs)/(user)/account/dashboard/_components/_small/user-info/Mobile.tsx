import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";

const Mobile = () => {
    const { data: user } = useFetchUserDetails();
    return (
        <p className="text-sm text-neutral-600 tracking-[2px] font-shabt">
            {convertEngToPer(user?.mobile!)}
        </p>
    );
};

export default Mobile;

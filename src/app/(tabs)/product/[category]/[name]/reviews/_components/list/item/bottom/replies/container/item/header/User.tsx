import { useContext } from "react";
import { ReplyContext } from "../Item";

const User = () => {
    const { user, userType } = useContext(ReplyContext);
    return (
        <>
            <p className="text-[.75rem] text-neutral-300 md:text-neutral-400 font-shabt">
                {user.fullName}
            </p>
            <p className="text-[.75rem] text-neutral-300 md:text-neutral-400 font-shabt">
                {userType}
            </p>
        </>
    );
};

export default User;

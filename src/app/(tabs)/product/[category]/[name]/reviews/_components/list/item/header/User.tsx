import { useContext } from "react";
import { Context } from "../Item";

const User = () => {
    const { user, userType } = useContext(Context);
    return (
        <div className="flex items-center gap-1">
            <p className="text-[.75rem] font-shabt text-neutral-500">
                {user?.fullName || "سارا نیک"}
            </p>
            <p className="bg-white  p-[2px] px-2 rounded-lg text-[.75rem] font-shabt text-neutral-500">
                {userType || "خریدار"}
            </p>
        </div>
    );
};

export default User;

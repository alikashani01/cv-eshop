"use client";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import DeleteAccount from "./DeleteAccount";
import Mobile from "./mobile/Mobile";
import Name from "./name/Name";

const Body = () => {
    const { data: user } = useFetchUserDetails();
    return (
        <div className="py-16 p-4">
            <Name fullName={user?.fullName || ""} />
            <Mobile mobile={user?.mobile || ""} />
            <DeleteAccount />
        </div>
    );
};

export default Body;

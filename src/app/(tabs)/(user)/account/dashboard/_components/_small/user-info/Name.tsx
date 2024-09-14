import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";

const Name = () => {
    const { data: user } = useFetchUserDetails();
    return (
        <p className="mr-[2px] text-neutral-600 text-sm">{user?.fullName}</p>
    );
};

export default Name;

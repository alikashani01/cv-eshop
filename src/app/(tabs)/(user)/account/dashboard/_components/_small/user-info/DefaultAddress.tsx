import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";

const DefaultAddress = () => {
    const { data: user } = useFetchUserDetails();
    const defaultAddress = user?.addresses?.find((a) => a.isDefault);
    return (
        <p className="text-[.8rem] text-neutral-400 font-shabt mr-[2px]">
            {defaultAddress ? defaultAddress.street : "آدرسی ثبت نشده!"}
        </p>
    );
};

export default DefaultAddress;

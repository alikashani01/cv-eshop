import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";

const DefaultAddress = () => {
    const { data: user } = useFetchUserDetails();
    const defaultAddress = user?.addresses?.find((a) => a.isDefault);
    return (
        <p className="text-[.8rem] text-neutral-500 font-shabt mr-[2px] overflow-hidden text-ellipsis text-nowrap w-full">
            {defaultAddress ? defaultAddress.street : "آدرسی ثبت نشده!"}
        </p>
    );
};

export default DefaultAddress;

"use client";

import Empty from "@/src/app/_components/_modules/Empty";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import Item from "./item/Item";

const List = () => {
    const { data: user } = useFetchUserDetails();
    return (
        <div className="px-4 pb-4">
            <Empty
                message="آدرسی ثبت نشده!"
                padding="16px 0 4px 0"
                length={user?.addresses?.length || 0}
            />
            {user?.addresses?.map((address) => (
                <Item key={address._id} address={address} />
            ))}
        </div>
    );
};

export default List;

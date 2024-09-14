import useBagStore from "@/src/queries/order/bag/store";
import { Address } from "@/src/queries/user/Entities";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { useContext } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Context } from "../../_Context";

const Saved = () => {
    const { data: user } = useFetchUserDetails();
    const { data } = useContext(Context);
    const setShippingInfo = useBagStore((s) => s.setShippingInfo);
    const shippingInfo = useBagStore((s) => s.shippingInfo);
    const handleAddress = (address: Address) => {
        setShippingInfo({
            ...data,
            _id: address._id,
            title: address.title || "",
            state: address.state || "",
            city: address.city || "",
            street: address.street || "",
            zipCode: address.zipCode || "",
            description: address.description || "",
        });
    };
    const isSavedActive = (address: Address): boolean => {
        return address._id === shippingInfo._id &&
            address.city === shippingInfo.city &&
            address.description === shippingInfo.description &&
            address.phone === shippingInfo.phone &&
            address.state === shippingInfo.state &&
            address.title === shippingInfo.title &&
            address.zipCode === shippingInfo.zipCode
            ? true
            : false;
    };
    return (
        user?.addresses?.length !== 0 && (
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                style={{ padding: "8px", paddingBottom: 0 }}
            >
                {user?.addresses?.map((address) => (
                    <SwiperSlide
                        key={address._id}
                        onClick={() => handleAddress(address)}
                        style={{ width: "auto" }}
                    >
                        <p
                            className={`bg-neutral-200 border rounded-xl py-2 p-5 text-sm
                    ${
                        address._id === shippingInfo._id
                            ? "border-blue-600"
                            : "border-neutral-100"
                    }    
                    `}
                        >
                            {address.title}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>
        )
    );
};

export default Saved;

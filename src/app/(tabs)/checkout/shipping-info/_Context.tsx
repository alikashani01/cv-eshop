"use client";
import useBagStore from "@/src/queries/order/bag/store";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import {
    createContext,
    FormEvent,
    PropsWithChildren,
    useEffect,
    useState,
} from "react";

export type ShippingInfoData = {
    fullName: string;
    mobile: string;
    isMobileVerified: boolean;
    title: string;
    state: string;
    city: string;
    street: string;
    zipCode: string;
    description: string;
};

export type IContext = {
    data: ShippingInfoData;
    setData: (data: ShippingInfoData) => void;
    onChange: (event: FormEvent) => void;
};

export const engToPer = (value: string): string => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return value?.replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

export const Context = createContext({} as IContext);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const [data, setData] = useState({
        fullName: "",
        mobile: "",
        isMobileVerified: false,
        title: "",
        state: "",
        city: "",
        street: "",
        zipCode: "",
        description: "",
    });

    const handleChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        setData({
            ...data,
            [target.name]:
                target.name === "mobile"
                    ? engToPer(target.value)
                    : target.value,
        });
    };

    const { data: user } = useFetchUserDetails();

    const defaultAddress = user?.addresses?.find((a) => a.isDefault);

    const shippingInfo = useBagStore((s) => s.shippingInfo);

    const {
        fullName,
        mobile,
        isMobileVerified,
        title,
        state,
        city,
        street,
        zipCode,
        description,
    } = shippingInfo;

    useEffect(() => {
        if (user) {
            setData({
                ...data,
                fullName: fullName || user.fullName,
                mobile: engToPer(mobile) || engToPer(user.mobile),
                isMobileVerified: isMobileVerified || false,
                title: title || defaultAddress?.title || "",
                state: state || defaultAddress?.state || "",
                city: city || defaultAddress?.city || "",
                street: street || defaultAddress?.street || "",
                zipCode: zipCode || defaultAddress?.zipCode || "",
                description: description || defaultAddress?.description || "",
            });
        }
    }, [user, shippingInfo]);

    const contextValues = {
        data,
        setData,
        onChange: handleChange,
    };

    return (
        <Context.Provider value={contextValues}>{children}</Context.Provider>
    );
};

export default ContextProvider;

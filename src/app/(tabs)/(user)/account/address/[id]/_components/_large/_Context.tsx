"use client";

import ActionResponse from "@/src/app/_components/_modules/action-response/ActionResponse";
import useEditAddress from "@/src/queries/user/address/useEdit";
import { Address } from "@/src/queries/user/Entities";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { createContext, PropsWithChildren, useEffect } from "react";
import {
    FieldErrors,
    useForm,
    UseFormGetValues,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormSetValue,
    UseFormWatch,
} from "react-hook-form";
import { z } from "zod";

type IContext = {
    errors: FieldErrors<Address>;
    getValues: UseFormGetValues<Address>;
    setValue: UseFormSetValue<Address>;
    watch: UseFormWatch<Address>;
    register: UseFormRegister<Address>;
    onSubmit: (data: Address) => void;
    handleSubmit: UseFormHandleSubmit<Address, undefined>;
    isLoading: boolean;
};

export const Context = createContext({} as IContext);

const schema = z.object({
    title: z.string().min(2, { message: "حداقل ۲ حرف." }),
    state: z.string().min(1, { message: "استان و شهر را انتخاب کنید" }),
    city: z.string().min(1, { message: "استان و شهر را انتخاب کنید" }),
    street: z.string().min(1, { message: "آدرس کامل‌تان را وارد کنید." }),
    zipCode: z
        .string()
        .min(1, { message: "کد پستی ۱۰ رقمی یا پلاک را وارد کنید." }),
    phone: z.string().optional(),
    description: z.string().optional(),
});

const ContextProvider = ({ children }: PropsWithChildren) => {
    const { id } = useParams<{ id: string }>();

    const { register, handleSubmit, formState, getValues, setValue, watch } =
        useForm<Address>({
            resolver: zodResolver(schema),
        });
    const { errors } = formState;

    const { data: user } = useFetchUserDetails();

    const currentAddress = user?.addresses?.find((a) => a._id === id);

    useEffect(() => {
        if (currentAddress) {
            setValue("title", currentAddress.title);
            setValue("state", currentAddress.state);
            setValue("city", currentAddress.city);
            setValue("street", currentAddress.street);
            setValue("zipCode", currentAddress.zipCode);
            setValue("phone", currentAddress.phone);
            setValue("description", currentAddress.description);
        }
    }, [currentAddress]);

    const editAddress = useEditAddress(id);
    const { isSuccess, isPending, error, reset, data } = editAddress;
    const onSubmit = (data: Address) => {
        editAddress.mutate(data);
    };

    const contextValues = {
        errors,
        getValues,
        setValue,
        watch,
        register,
        onSubmit,
        handleSubmit,
        isLoading: isPending,
    };
    return (
        <Context.Provider value={contextValues}>
            {children}
            <ActionResponse
                success={isSuccess}
                message={data || ""}
                error={error?.message || ""}
                reset={reset}
            />
        </Context.Provider>
    );
};

export default ContextProvider;

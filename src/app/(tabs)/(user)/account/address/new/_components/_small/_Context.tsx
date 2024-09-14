"use client";

import ActionResponse from "@/src/app/_components/_modules/action-response/ActionResponse";
import useCreateAddress from "@/src/queries/user/address/useCreate";
import { Address } from "@/src/queries/user/Entities";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, PropsWithChildren } from "react";
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
    const { register, handleSubmit, formState, getValues, setValue, watch } =
        useForm<Address>({
            resolver: zodResolver(schema),
        });
    const { errors } = formState;

    const createAddress = useCreateAddress();
    const { isSuccess, isPending, error, reset, data } = createAddress;
    const onSubmit = (data: Address) => {
        createAddress.mutate(data);
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

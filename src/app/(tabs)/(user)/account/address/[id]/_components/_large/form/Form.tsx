"use client";
import { useContext } from "react";
import { Context } from "../_Context";
import Description from "./Description";
import Phone from "./Phone";
import StateCity from "./state-city/StateCity";
import Street from "./Street";
import Title from "./Title";
import ZipCode from "./ZipCode";

const Form = () => {
    const { handleSubmit, onSubmit, errors, register, getValues, isLoading } =
        useContext(Context);
    return (
        <form
            className="w-full md:w-[500px] mx-auto flex flex-col gap-4 md:mt-4 px-4 pt-16 pb-14 md:py-10"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Title />

            <StateCity />

            <Street />

            <ZipCode />

            <Phone />

            <Description />
        </form>
    );
};

export default Form;

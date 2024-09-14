"use client";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { Context } from "../_Context";
import Description from "./Description";
import Phone from "./Phone";
import StateCity from "./state-city/StateCity";
import Street from "./Street";
import Title from "./Title";
import ZipCode from "./ZipCode";

const Form = () => {
    const { handleSubmit, onSubmit, isLoading } = useContext(Context);
    return (
        <form
            className="w-full md:w-[500px] mx-auto flex flex-col gap-4 px-4 py-16"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Title />

            <StateCity />

            <Street />

            <ZipCode />

            <Phone />

            <Description />

            <div className="md:hidden fixed bottom-0 left-0 w-full h-14 flex items-center justify-center bg-[#fff2] backdrop-blur-xl p-1">
                <button
                    className="w-full h-full gap-2 rounded-2xl bg-blue text-white"
                    disabled={isLoading}
                >
                    {isLoading && <CircularProgress size={15} />}
                    ذخیره آدرس
                </button>
            </div>
        </form>
    );
};

export default Form;

"use client";
import { useContext } from "react";
import { Context } from "../../../_Context";
import Description from "./Description";
import StateCity from "./state-city/StateCity";
import Street from "./Street";
import ZipCode from "./ZipCode";

const Form = () => {
    const { data } = useContext(Context);
    return (
        <div className="py-2 flex flex-col gap-2">
            <StateCity state={data.state} city={data.city} />

            <Street street={data.street} />

            <ZipCode zipCode={data.zipCode} />

            <Description description={data.description} />
        </div>
    );
};

export default Form;

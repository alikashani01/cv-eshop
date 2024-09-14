"use client";
import ContextProvider from "./_Context";
import Add from "./add/Add";
import Verify from "./verify/Verify";

const Form = () => {
    return (
        <ContextProvider>
            <Add />
            <Verify />
        </ContextProvider>
    );
};

export default Form;

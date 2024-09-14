"use client";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import LargeScreenContainer from "../../../../_components/LargeScreenContainer";
import Form from "./form/Form";
import ContextProvider, { Context } from "./_Context";
import Header from "./Header";

const Large = () => {
    return (
        <ContextProvider>
            <LargeScreenContainer>
                <Header />
                <Form />
            </LargeScreenContainer>
        </ContextProvider>
    );
};

export default Large;

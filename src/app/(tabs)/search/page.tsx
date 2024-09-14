import { CircularProgress } from "@mui/material";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Form from "./_components/Form";
import Header from "./_components/header/Header";
import Results from "./_components/Results";
import Suggestions from "./_components/Suggestions";
import ContextProvider from "./_Context";
const History = dynamic(() => import("./_components/History"), {
    ssr: false,
});

const SearchPage = () => {
    return (
        <ContextProvider>
            <Header />
            <Suspense fallback={<CircularProgress />}>
                <History />
            </Suspense>
            <Suggestions />
            <Results />
            <Form />
        </ContextProvider>
    );
};

export default SearchPage;

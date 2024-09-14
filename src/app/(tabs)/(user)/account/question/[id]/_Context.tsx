"use client";

import { Question } from "@/src/queries/question/Entities";
import useFetchQuestionDetails from "@/src/queries/question/useFetchDetails";
import { useParams } from "next/navigation";
import { createContext, PropsWithChildren } from "react";

export const Context = createContext({} as Question);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const { id } = useParams<{ id: string }>();
    const { data: question } = useFetchQuestionDetails(id);
    return (
        <Context.Provider value={question || ({} as Question)}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;

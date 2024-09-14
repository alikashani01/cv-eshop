"use client";

import { Review } from "@/src/queries/review/Entities";
import useFetchReviewDetails from "@/src/queries/review/useFetchDetails";
import { useParams } from "next/navigation";
import { createContext, PropsWithChildren } from "react";

export const Context = createContext({} as Review);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const { id } = useParams<{ id: string }>();
    const { data: review } = useFetchReviewDetails(id);
    return (
        <Context.Provider value={review || ({} as Review)}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;

"use client";

import LargeScreenContainer from "../../../_components/LargeScreenContainer";
import List from "../list/List";
import Header from "./header/Header";

const Large = () => {
    return (
        <LargeScreenContainer>
            <Header />
            <List />
        </LargeScreenContainer>
    );
};

export default Large;

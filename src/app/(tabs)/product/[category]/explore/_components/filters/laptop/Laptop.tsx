"use client";
import { useParams } from "next/navigation";
import Application from "./Application";
import Brand from "./Brand";
import Colors from "./colors/Colors";
import Proccessor from "./proccessor/Proccessor";
import RAM from "./ram/RAM";
import ScreenSize from "./screen/ScreenSize";
import ScreenType from "./screen/ScreenType";

const Laptop = () => {
    const { category } = useParams<{ category: string }>();
    return (
        <>
            <Brand />
            <Colors />
            <Proccessor />
            <Application />
            <ScreenType />
            <ScreenSize />
            <RAM />
        </>
    );
};

export default Laptop;

"use client";
import Battery from "./Battery";
import Body from "./Body";
import Connectivity from "./connectivity/Connectivity";
import Display from "./Display";
import Keyboard from "./Keyboard";
import Memory from "./Memory";
import Others from "./Others";
import Proccessors from "./proccessors/Proccessors";
import Storages from "./Storages";

const Container = () => {
    return (
        <div className="">
            <Body />
            <Display />
            <Proccessors />
            <Keyboard />
            <Others />
            <Connectivity />
            <Storages />
            <Memory />
            <Battery />
        </div>
    );
};

export default Container;

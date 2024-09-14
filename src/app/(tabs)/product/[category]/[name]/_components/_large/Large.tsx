"use client";

import Compatibility from "../Compatibility";
import Highlights from "../Highlights";
import Media from "../media/Media";
import Navigation from "../Navigation";
import Questions from "../questions/Questions";
import Related from "../related-products/Related";
import Reviews from "../reviews/Reviews";
import Box from "./box/Box";
import Overviews from "./overviews/Overviews";
import TopDetails from "./top-details/TopDetails";
import Top from "./top/Top";

const Large = () => {
    return (
        <div className="hidden lg:block">
            <Navigation />
            <Top />
            <TopDetails />
            <div className="flex flex-col gap-20 px-[8%] pt-20 *:bg-second-theme *:rounded-xl">
                <Highlights />
                <Overviews />
                <Box />
                <Compatibility />
                <Reviews />
                <Questions />
            </div>
            <Related />
            <Media />
        </div>
    );
};

export default Large;

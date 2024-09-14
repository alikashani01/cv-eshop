"use client";

import { useState } from "react";
import Compatibility from "../Compatibility";
import Description from "../Description";
import Highlights from "../Highlights";
import Media from "../media/Media";
import Navigation from "../Navigation";
import Questions from "../questions/Questions";
import Related from "../related-products/Related";
import Reviews from "../reviews/Reviews";
import TopFeatures from "../top-features/TopFeatures";
import Box from "./box/Box";
import Gallery from "./gallery/Gallery";
import Header from "./Header";
import Overviews from "./overviews/Overviews";
import Pricing from "./pricing/Pricing";
import RatingContainer from "./Rating";
import ToggleHeader from "./toggle-header/ToggleHeader";
import Top from "./Top";
import Footer from "./footer/Footer";

const Small = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = (value: boolean) => setToggle(value);
    return (
        <div className="lg:hidden pb-20">
            <Header />
            <Navigation />
            <ToggleHeader toggle={toggle} />
            <div className="flex flex-col gap-8 px-4 pt-2 *:bg-second-theme *:rounded-xl">
                <div className="flex flex-col gap-2 !bg-[unset] *:bg-second-theme *:rounded-xl">
                    <Top />
                    <RatingContainer />
                    <Gallery onToggle={handleToggle} />
                </div>
                <Pricing />
                <TopFeatures />
                <Description />
                <Highlights />
                <Overviews />
                <Box />
                <Compatibility />
            </div>
            <Reviews />
            <Questions />
            <Related />
            <Media />
            <Footer />
        </div>
    );
};

export default Small;

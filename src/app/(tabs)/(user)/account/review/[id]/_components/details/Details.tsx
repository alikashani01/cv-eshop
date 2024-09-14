"use client";

import Dislikes from "./Dislikes";
import Likes from "./Likes";
import Rating from "./Rating";

const Details = () => {
    return (
        <aside className="h-12 flex items-center justify-between px-4 mt-12 lg:m-0">
            <Rating />
            <div className="flex items-center gap-4">
                <Likes />
                <Dislikes />
            </div>
        </aside>
    );
};

export default Details;

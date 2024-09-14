"use client";

import Dislikes from "./Dislikes";
import Likes from "./Likes";

const Details = () => {
    return (
        <aside className="h-12 flex items-center justify-between px-4 mt-12 lg:m-0">
            <Likes />
            <Dislikes />
        </aside>
    );
};

export default Details;

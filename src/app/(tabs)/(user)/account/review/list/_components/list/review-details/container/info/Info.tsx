"use client";

import Comment from "./Comment";
import Features from "./features/Features";
import Replies from "./replies/Replies";
import Sidebar from "./sidebar/Sidebar";

const Info = () => {
    return (
        <div className="h-[calc(100%-64px)] flex">
            <Sidebar />
            <div className="w-full flex flex-col gap-4 py-4 pl-6 *:w-full">
                <Comment />
                <Features />
                <Replies />
            </div>
        </div>
    );
};

export default Info;

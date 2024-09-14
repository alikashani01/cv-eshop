"use client";
import { useState } from "react";
import List from "../list/List";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";

const Large = () => {
    const [isCollpased, setIsCollpased] = useState(false);
    const handleCollapse = () => setIsCollpased(!isCollpased);
    return (
        <div className="hidden md:block sticky top-0">
            <Header onCollapse={handleCollapse} />
            <div className="flex">
                <Sidebar isCollpased={isCollpased} />
                <div className="flex-grow">
                    <List isCollpased={isCollpased} />
                </div>
            </div>
        </div>
    );
};

export default Large;

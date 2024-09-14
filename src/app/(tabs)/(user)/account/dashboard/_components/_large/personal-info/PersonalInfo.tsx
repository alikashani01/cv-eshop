"use client";

import Mobile from "./mobile/Mobile";
import Name from "./name/Name";

const PersonalInfo = () => {
    return (
        <div className="bg-white rounded-2xl">
            <p className="h-14 flex items-center justify-between px-6 text-neutral-600">
                اطلاعات شخصی
            </p>
            <Name />
            <Mobile />
        </div>
    );
};

export default PersonalInfo;

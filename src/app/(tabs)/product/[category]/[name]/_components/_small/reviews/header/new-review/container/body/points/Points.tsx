import { useState } from "react";
import Advantages from "./Advantages";
import Categories from "./Categories";
import Disadvantages from "./Disadvantages";
import NewPoint from "./NewPoint";

const Points = () => {
    const [category, setCategory] = useState("مثبت");
    return (
        <div className="py-6 px-4">
            <label
                className="block text-[.9rem] px-1 mb-1 text-neutral-500"
                htmlFor="newPoint"
            >
                نکته {category} مدنظرتان را به لیست زیر اضافه کنید
            </label>
            <Categories category={category} setCategory={setCategory} />
            <NewPoint category={category} />
            {category === "مثبت" ? <Advantages /> : <Disadvantages />}
        </div>
    );
};

export default Points;

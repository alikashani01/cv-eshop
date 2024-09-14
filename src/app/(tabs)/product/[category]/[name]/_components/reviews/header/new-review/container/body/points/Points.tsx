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
                className="block px-1 mb-2 text-neutral-200 text-[.9rem]"
                htmlFor="newPoint"
            >
                ویژگی‌های محصول را اضافه کنید
            </label>
            <Categories category={category} setCategory={setCategory} />
            <NewPoint category={category} />
            {category === "مثبت" ? <Advantages /> : <Disadvantages />}
        </div>
    );
};

export default Points;

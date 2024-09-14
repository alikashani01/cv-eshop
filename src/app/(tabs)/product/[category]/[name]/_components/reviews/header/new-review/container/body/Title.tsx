import { useContext } from "react";
import { Context } from "../Context";

const Title = () => {
    const {
        data: { title },
        onChange,
    } = useContext(Context);
    return (
        <div className="p-4">
            <label
                className="block mb-2 mr-2 text-neutral-200 text-[.9rem]"
                htmlFor="title"
            >
                عنوان
            </label>
            <input
                className="w-full h-14 p-4 px-4 text-white bg-slate-700 rounded-2xl border border-slate-600 text-lg focus:border-blue-500 transition duration-300 placeholder:text-neutral-400 placeholder:font-shabt"
                id="title"
                type="text"
                name="title"
                placeholder="عنوان دیدگاه..."
                value={title}
                onChange={onChange}
            />
        </div>
    );
};

export default Title;

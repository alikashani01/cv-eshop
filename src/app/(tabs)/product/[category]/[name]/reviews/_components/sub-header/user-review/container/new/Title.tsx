import { useContext } from "react";
import { Context } from "../Context";

const Title = () => {
    const {
        data: { title },
        onChange,
    } = useContext(Context);
    return (
        <div className="p-4">
            <label className="block mb-1 mr-2 text-neutral-500" htmlFor="title">
                عنوان
            </label>
            <input
                className="w-full h-14 p-4 px-4 bg-second-theme rounded-2xl border border-neutral-200 text-lg focus:border-blue-500 transition duration-300"
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

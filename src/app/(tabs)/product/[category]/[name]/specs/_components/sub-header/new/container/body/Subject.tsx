import { useContext } from "react";
import { Context } from "../Context";

const Subject = () => {
    const {
        data: { subject },
        onChange,
    } = useContext(Context);
    return (
        <div className="p-4">
            <label
                className="block mb-2 mr-1 text-sm text-neutral-300"
                htmlFor="subject"
            >
                موضوع
            </label>
            <input
                className="w-full h-14 p-4 px-4 text-white bg-slate-600 border border-slate-500 text-lg focus:border-blue-500 transition duration-300 placeholder:text-neutral-400 placeholder:font-shabt"
                id="subject"
                type="text"
                name="subject"
                placeholder="موضوع پرسش..."
                value={subject}
                onChange={onChange}
            />
        </div>
    );
};

export default Subject;

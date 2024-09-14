import { useContext } from "react";
import { Context } from "../../_Context";
import Mobile from "./mobile/Mobile";

const Customer = () => {
    const { data, onChange } = useContext(Context);
    return (
        <div className="w-full my-4 lg:m-0 overflow-hidden">
            <div className="flex items-center gap-1 px-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="orange"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                <p>تحویل گیرنده</p>
            </div>
            <div className="mt-4 lg:mt-6">
                <label
                    className="block mb-1 mr-2 text-sm text-neutral-500 font-shabt"
                    htmlFor="fullName"
                >
                    نام کامل
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder=""
                    className="w-full bg-second-theme p-5 rounded-2xl"
                    value={data.fullName}
                    onChange={onChange}
                />
            </div>
            <Mobile />
        </div>
    );
};

export default Customer;

import { useContext } from "react";
import { Context } from "../_Context";
import Error from "./Error";

const ZipCode = () => {
    const { setValue, register, errors, watch } = useContext(Context);
    const error = errors.zipCode?.message;
    const zipCode = watch("zipCode");
    return (
        <div>
            <div className="h-16 flex items-center relative">
                <label
                    className="absolute right-6 text-sm text-neutral-500"
                    htmlFor="zipCode"
                >
                    کد پستی یا پلاک
                </label>
                <input
                    id="zipCode"
                    className={`w-full h-full pt-[1px] px-16 pr-32 text-lg bg-white rounded-2xl text-neutral-700 placeholder:font-shabt placeholder:text-[.8rem] placeholder:text-neutral-400 border border-neutral-200 focus:border-blue-500 transition-all duration-500
                    ${error ? "border-rose-500" : "border-neutral-200"}
                `}
                    type="text"
                    placeholder="مثال: ۳۳۴۳۴۴۲۱۱۲"
                    {...register("zipCode", { required: true })}
                />
                {zipCode && (
                    <button
                        type="button"
                        className="absolute left-5 bg-neutral-100 p-[2px] rounded-full"
                        onClick={() => setValue("zipCode", "")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#888888"
                            className="bi bi-x"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                )}
            </div>
            {error && <Error message={error} />}
        </div>
    );
};

export default ZipCode;

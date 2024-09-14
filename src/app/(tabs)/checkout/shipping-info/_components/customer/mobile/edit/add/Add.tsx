import { useContext } from "react";
import { Context } from "../_Context";
import Error from "./Error";
import Example from "./Example";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const Add = () => {
    const { verifyOpen } = useContext(Context);
    return (
        !verifyOpen && (
            <div>
                <div className="w-full max-w-[360px] h-[200px] flex flex-col items-center justify-center px-4 mx-auto *:w-full">
                    <label hidden htmlFor="mobile">
                        شماره موبایل‌تان را وارد کنید
                    </label>
                    <Example />
                    <Input />
                    <Error />
                </div>
                <SubmitButton />
            </div>
        )
    );
};

export default Add;

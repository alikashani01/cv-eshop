import { useContext } from "react";
import { Context } from "../_Context";
import Container from "../Container";
import Footer from "./Footer";
import Input from "./Input";
import Submit from "./Submit";

const Add = () => {
    const { isSent } = useContext(Context);
    return (
        !isSent && (
            <Container>
                <p className="text-neutral-300 text-[.9rem]">
                    شماره موبایل‌تان را وارد کنید
                </p>

                <div className="w-full relative flex items-center">
                    <Input />
                    <Submit />
                </div>

                <Footer />
            </Container>
        )
    );
};

export default Add;

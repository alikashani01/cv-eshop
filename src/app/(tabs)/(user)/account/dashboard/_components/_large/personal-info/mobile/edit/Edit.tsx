"use client";
import ContextProvider from "./_Context";
import Add from "./add/Add";
import Header from "./Header";
import Verify from "./verify/Verify";

const Form = ({ onClose }: { onClose: () => void }) => {
    return (
        <ContextProvider>
            <div className="w-[400px]">
                <Header onClose={onClose} />
                <Add />
                <Verify onClose={onClose} />
            </div>
        </ContextProvider>
    );
};

export default Form;

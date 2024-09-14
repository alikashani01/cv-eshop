"use client";
import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import ContextProvider from "./_Context";
import Add from "./add/Add";
import Header from "./Header";
import Verify from "./verify/Verify";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Edit = ({ isOpen, onClose }: Props) => {
    return (
        <ContextProvider>
            <Backdrop isOpen={isOpen} onClose={onClose}>
                <div className="w-full">
                    <Header onClose={onClose} />
                    <Add />
                    <Verify onClose={onClose} />
                </div>
            </Backdrop>
        </ContextProvider>
    );
};

export default Edit;

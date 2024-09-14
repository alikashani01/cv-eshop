import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "../_modules/backdrop/Backdrop";
import Agreement from "./Agreement";
import Header from "./Header";
import Form from "./form/Form";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function SigninRequired({ isOpen, onClose }: Props) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;
    return createPortal(
        <Backdrop isOpen={isOpen} onClose={onClose}>
            <div>
                <Header onClose={onClose} />
                <Form />
                <Agreement />
            </div>
        </Backdrop>,
        document.body
    );
}

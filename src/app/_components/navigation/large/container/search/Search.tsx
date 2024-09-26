import Image from "next/image";
import { useContext } from "react";
import { NavContext } from "../../_Context";
import Backdrop from "../../Backdrop";
import Container from "./Container";

export default function Search() {
    const { onOpenSearch, searchOpen, setSearchOpen } = useContext(NavContext);
    return (
        <>
            <button className="ml-4" onClick={onOpenSearch}>
                <Image
                    width={23}
                    height={23}
                    src="/icons/nav/search.png"
                    alt=""
                />
            </button>
            <Backdrop open={searchOpen} onClose={() => setSearchOpen(false)}>
                <Container />
            </Backdrop>
        </>
    );
}

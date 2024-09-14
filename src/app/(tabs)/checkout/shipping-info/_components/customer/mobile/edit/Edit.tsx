import { useContext } from "react";
import Header from "./Header";
import { Context } from "./_Context";
import Add from "./add/Add";
import Verify from "./verify/Verify";

const Edit = ({ onClose }: { onClose: () => void }) => {
    const { editMobile, data } = useContext(Context);
    return (
        <form
            className="w-full p-1 md:w-[500px]"
            onSubmit={(e) => {
                e.preventDefault();
                editMobile.mutate(data);
            }}
        >
            <Header onClose={onClose} />
            <Add />
            <Verify onClose={onClose} />
        </form>
    );
};

export default Edit;

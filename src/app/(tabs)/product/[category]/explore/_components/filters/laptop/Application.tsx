import { laptopApp } from "@/data/specs/applications";
import AddedList from "../_part/AddedList";
import Options from "../_part/options/Options";
import Part from "../_part/Part";

const Application = () => {
    return (
        <Part title="انواع کاربردی">
            <AddedList title="application" />
            <Options title="application" options={laptopApp} />
        </Part>
    );
};

export default Application;

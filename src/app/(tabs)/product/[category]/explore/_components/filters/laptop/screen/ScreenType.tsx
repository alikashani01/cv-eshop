import { laptopScreenTypes } from "@/data/specs/screen/types";
import AddedList from "../../_part/AddedList";
import Options from "../../_part/options/Options";
import Part from "../../_part/Part";

const ScreenType = () => {
    return (
        <Part title="نوع نمایشگر">
            <AddedList title="screenType" />
            <Options title="screenType" options={laptopScreenTypes} />
        </Part>
    );
};

export default ScreenType;

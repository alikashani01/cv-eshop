import { laptopScreenSizes } from "@/data/specs/screen/sizes";
import AddedList from "../../_part/AddedList";
import Options from "../../_part/options/Options";
import Part from "../../_part/Part";

const ScreenSize = () => {
    return (
        <Part title="اندازه نمایشگر">
            <AddedList title="screenSize" />
            <Options title="screenSize" options={laptopScreenSizes} />
        </Part>
    );
};

export default ScreenSize;

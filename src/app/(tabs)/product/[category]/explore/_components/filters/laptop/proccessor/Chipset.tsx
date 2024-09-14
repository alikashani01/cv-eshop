import { laptopChipsets } from "@/data/specs/proccessor/chipsets";
import AddedList from "../../_part/AddedList";
import Options from "../../_part/options/Options";
import Part from "../../_part/Part";

const Chipset = () => {
    return (
        <Part title="پردازنده‌">
            <AddedList title="chipset" />
            <Options title="chipset" options={laptopChipsets} />
        </Part>
    );
};

export default Chipset;

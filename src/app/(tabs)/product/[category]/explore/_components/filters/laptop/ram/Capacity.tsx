import { laptopRamCapacities } from "@/data/specs/ram/capacity";
import AddedList from "../../_part/AddedList";
import Options from "../../_part/options/Options";
import Part from "../../_part/Part";

const Capacity = () => {
    return (
        <Part title="فضای ذخیره‌سازی RAM">
            <AddedList title="ramCapacity" />
            <Options title="ramCapacity" options={laptopRamCapacities} />
        </Part>
    );
};

export default Capacity;

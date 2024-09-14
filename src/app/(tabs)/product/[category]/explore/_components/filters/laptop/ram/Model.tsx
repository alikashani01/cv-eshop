import { laptopRamModels } from "@/data/specs/ram/model";
import AddedList from "../../_part/AddedList";
import Options from "../../_part/options/Options";
import Part from "../../_part/Part";

const Model = () => {
    return (
        <Part title="مدل RAM">
            <AddedList title="ramModel" />
            <Options title="ramCapacity" options={laptopRamModels} />
        </Part>
    );
};

export default Model;

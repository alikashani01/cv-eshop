import { laptopBrands } from "@/data/specs/brands";
import AddedList from "../_part/AddedList";
import Options from "../_part/options/Options";
import Part from "../_part/Part";

const Brand = () => {
    return (
        <Part title="برندها">
            <AddedList title="brand" />
            <Options title="brand" options={laptopBrands} />
        </Part>
    );
};

export default Brand;

import { laptopGpuCapacities } from "@/data/specs/proccessor/gpuCapcities";
import AddedList from "../../_part/AddedList";
import Part from "../../_part/Part";
import Options from "../../_part/options/Options";

const GPUCapacities = () => {
    return (
        <Part title="حافظه‌ی اختصاصی پردازنده‌ گرافیکی">
            <AddedList title="gpuCapacities" />
            <Options title="gpuCapacities" options={laptopGpuCapacities} />
        </Part>
    );
};

export default GPUCapacities;

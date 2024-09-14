import Photo from "./Photo";
import Text from "./Text";

export default function Two() {
    return (
        <div className="relative flex flex-col lg:flex-row items-center justify-center *:!flex-1 gap-4 p-4 py-20 overflow-hidden">
            <Photo />
            <Text />
        </div>
    );
}

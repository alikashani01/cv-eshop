import Photo from "./Photo";
import Text from "./Text";

export default function Two() {
    return (
        <div className="flex flex-col items-center p-6 overflow-hidden">
            <Photo />
            <Text />
        </div>
    );
}

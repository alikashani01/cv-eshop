import Media from "./Media";
import Text from "./Text";

export default function Four() {
    return (
        <div className="overflow-hidden relative flex flex-col items-center gap-4 lg:gap-6 py-6 lg:py-20 lg:pb-0">
            <Media />
            <Text />
        </div>
    );
}

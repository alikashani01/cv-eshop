import Photo from "./Photo";

export default function Three() {
    return (
        <div className="relative flex flex-col lg:flex-row items-center justify-center *:!flex-1 gap-4 p-4 py-40 overflow-hidden">
            <Photo />
        </div>
    );
}

import { Skeleton } from "@mui/material";

const Loading = () => {
    return (
        <ul className="pb-16 pt-4 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Skeleton
                variant="rounded"
                animation="wave"
                height="440px"
                className="!bg-second-theme !rounded-2xl"
            />
            <Skeleton
                variant="rounded"
                animation="wave"
                height="440px"
                className="!bg-second-theme !rounded-2xl"
            />
            <Skeleton
                variant="rounded"
                animation="wave"
                height="440px"
                className="!bg-second-theme !rounded-2xl"
            />
        </ul>
    );
};

export default Loading;

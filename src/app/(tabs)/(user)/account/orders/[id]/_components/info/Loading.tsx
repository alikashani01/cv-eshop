import { Skeleton } from "@mui/material";

const Loading = () => {
    return (
        <>
            <div className="flex items-center justify-center gap-4 *:w-1/2">
                <Skeleton
                    width="100%"
                    height="80px"
                    variant="rounded"
                    animation="wave"
                    className="!bg-second-theme lg:bg-white !rounded-2xl"
                />
                <Skeleton
                    width="100%"
                    height="80px"
                    variant="rounded"
                    animation="wave"
                    className="!bg-second-theme lg:bg-white !rounded-2xl"
                />
            </div>

            <Skeleton
                width="100%"
                height="80px"
                variant="rounded"
                animation="wave"
                className="!bg-second-theme lg:bg-white !rounded-2xl"
            />
            <Skeleton
                width="100%"
                height="80px"
                variant="rounded"
                animation="wave"
                className="!bg-second-theme lg:bg-white !rounded-2xl"
            />
        </>
    );
};

export default Loading;

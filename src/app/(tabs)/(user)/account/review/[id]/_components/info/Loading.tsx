import { Skeleton } from "@mui/material";

const Loading = () => {
    return (
        <>
            <div className="flex flex-col gap-1">
                <Skeleton
                    width="100%"
                    height="20px"
                    variant="text"
                    animation="wave"
                    className="!bg-second-theme !rounded-2xl"
                />
                <Skeleton
                    width="80%"
                    height="20px"
                    variant="text"
                    animation="wave"
                    className="!bg-second-theme !rounded-2xl"
                />
                <Skeleton
                    width="60%"
                    height="20px"
                    variant="text"
                    animation="wave"
                    className="!bg-second-theme !rounded-2xl"
                />
            </div>
            <Skeleton
                width="100%"
                height="100px"
                variant="rounded"
                animation="wave"
                className="!bg-second-theme !rounded-2xl"
            />
            <Skeleton
                width="100%"
                height="150px"
                variant="rounded"
                animation="wave"
                className="!bg-second-theme !rounded-2xl"
            />
        </>
    );
};

export default Loading;

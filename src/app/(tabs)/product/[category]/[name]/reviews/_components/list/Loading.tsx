import { Skeleton } from "@mui/material";

const Loading = () => {
    return (
        <>
            <Skeleton
                width="100%"
                height="250px"
                variant="rounded"
                animation="wave"
                className="!bg-second-theme !rounded-2xl"
            />
            <Skeleton
                width="100%"
                height="250px"
                variant="rounded"
                animation="wave"
                className="!bg-second-theme !rounded-2xl"
            />
        </>
    );
};

export default Loading;

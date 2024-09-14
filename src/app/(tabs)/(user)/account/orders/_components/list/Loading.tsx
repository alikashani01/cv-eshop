import { Skeleton } from "@mui/material";

const Loading = () => {
    return (
        <>
            <Skeleton
                width="100%"
                height="208px"
                variant="rounded"
                animation="wave"
                className="!bg-white !rounded-2xl"
            />
            <Skeleton
                width="100%"
                height="208px"
                variant="rounded"
                animation="wave"
                className="!bg-white !rounded-2xl"
            />
        </>
    );
};

export default Loading;

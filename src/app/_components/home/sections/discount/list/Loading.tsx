import { Skeleton } from "@mui/material";

const Loading = () => {
    return (
        <Skeleton
            width="100%"
            height="100%"
            variant="rounded"
            animation="wave"
            className="rounded-2xl bg-[#eaeaea]"
        />
    );
};

export default Loading;

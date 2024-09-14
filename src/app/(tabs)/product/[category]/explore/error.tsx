"use client";

const Error = ({ error }: { error: Error }) => {
    return (
        <div>
            Error
            <p>{error.message}</p>
        </div>
    );
};

export default Error;

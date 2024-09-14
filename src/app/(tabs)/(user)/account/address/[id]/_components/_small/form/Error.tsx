const Error = ({ message }: { message?: string }) => {
    return (
        message && (
            <p className="font-shabt text-[.8rem] text-rose-500 pt-1 pr-2">
                {message}
            </p>
        )
    );
};

export default Error;

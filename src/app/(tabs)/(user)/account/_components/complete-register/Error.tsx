const Error = ({ error }: { error?: string }) => {
    return (
        error && (
            <p className="text-rose-500 text-sm font-shabmt mt-1 mr-1">
                {error}
            </p>
        )
    );
};

export default Error;

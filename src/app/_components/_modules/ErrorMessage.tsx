const ErrorMessage = ({ message }: { message?: string }) => {
    return (
        message && (
            <p className="font-shabt text-[.85rem] text-rose-500 p-1">
                {message}
            </p>
        )
    );
};

export default ErrorMessage;

const Comment = ({ comment }: { comment: string }) => {
    return (
        <p className="pb-2 px-4 text-neutral-600 font-shabt text-[.9rem] leading-7">
            {comment}
            <span className="text-blue-500 pb-[5px] text-sm">
                &nbsp; بیشتر ...
            </span>
        </p>
    );
};

export default Comment;

interface Props {
    padding?: string;
    length?: number;
    isEmpty?: boolean;
    message: string;
}

const Empty = ({ padding, message, length, isEmpty }: Props) => {
    return (
        (length === 0 || isEmpty) && (
            <p
                style={{ padding }}
                className="flex items-center justify-center text-[.9rem] text-neutral-500"
            >
                {message}
            </p>
        )
    );
};

export default Empty;

interface Props {
    fa?: string;
    en?: string;
}

const Value = ({ fa, en }: Props) => {
    return (
        <div className="h-16 flex items-center justify-center text-center pt-3 gap-1">
            <p className="text-[.95rem] ltr">{fa}</p>
            <p className="text-[.95rem]">{en}</p>
        </div>
    );
};

export default Value;

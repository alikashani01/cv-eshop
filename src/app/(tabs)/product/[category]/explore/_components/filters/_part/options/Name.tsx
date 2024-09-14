interface Props {
    nameFa?: string;
    nameEn?: string;
    manufacturer?: string;
}

const Name = ({ nameFa, nameEn, manufacturer }: Props) => {
    return (
        <div className="text-neutral-600 text-sm">
            {nameEn && !nameFa ? (
                <p className="font-sfl tracking-[.6px]">
                    {manufacturer} {nameEn}
                </p>
            ) : (
                <p>{nameFa}</p>
            )}
        </div>
    );
};

export default Name;

interface Props {
    isExists: boolean;
    nameEn?: string;
}

const EnglishName = ({ isExists, nameEn }: Props) => {
    return (
        isExists && (
            <p className="text-neutral-600 font-sft tracking-[.6px] text-sm">
                {nameEn}
            </p>
        )
    );
};

export default EnglishName;

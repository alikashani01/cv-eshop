const Description = ({ description }: { description: string }) => {
    return (
        <p className="w-full h-24 flex flex-col items-center justify-center">
            {description}
        </p>
    );
};

export default Description;

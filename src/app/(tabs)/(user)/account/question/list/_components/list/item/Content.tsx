interface Props {
    featuresExists: boolean;
}

const Content = ({ content }: { content: string }) => {
    return (
        <p className="pb-2 px-4 text-neutral-600 font-shabt text-[.9rem] leading-7">
            {content}
            <span className="text-blue pb-[5px] text-sm">&nbsp; بیشتر ...</span>
        </p>
    );
};

export default Content;

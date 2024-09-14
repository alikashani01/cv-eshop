const Video = ({ src }: { src: string }) => {
    return (
        <video
            width="320"
            height="240"
            loop
            autoPlay
            controls={false}
            playsInline
            muted
            controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
            className="object-cover"
        >
            <source src={src} type="video/mp4" />
            <track src={src} kind="subtitles" srcLang="en" label="English" />
            Your browser does not support the video tag.
        </video>
    );
};

export default Video;

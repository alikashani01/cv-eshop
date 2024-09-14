const Item = ({ video }: { video: string }) => {
    return (
        <li className="h-[300px] w-full bg-second-theme rounded-xl overflow-hidden">
            <video
                className="w-[100%] h-[200px] object-cover"
                src={video}
                autoPlay={false}
                controls
            ></video>
            <p className="p-2 px-4 text-[.9rem] leading-7 h-[100px] flex items-center">
                از زمان معرفی دوتایی استیک، کنترلرهای بازی های ویدیویی آنقدر
                تغییر نکرده اند. دکمه های اشتراک گذاری و برخی تغییرات ارگونومیک
                اضافه شده است، اما نحوه تعامل و تجربه بازی ها تا حد زیادی یکسان
                است.
            </p>
        </li>
    );
};

export default Item;

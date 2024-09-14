const Storage = ({ capacity, unit }: { capacity: string; unit: string }) => {
    return (
        capacity && (
            <div className="flex items-start flex-col justify-center">
                <p className="text-2xl tracking-[1.5px]">{capacity}</p>
                <p className="text-[.8rem] text-[#777] ">{unit}</p>
            </div>
        )
    );
};

export default Storage;

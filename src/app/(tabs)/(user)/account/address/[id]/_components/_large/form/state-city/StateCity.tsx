import { useContext, useEffect, useState } from "react";
import { Context } from "../../_Context";
import Error from "../Error";
import { fetchCities } from "./locations";

const StateCity = () => {
    const { register, errors, getValues } = useContext(Context);
    const errorCity = errors.city?.message;

    const [selectedState, setSelectedState] = useState(getValues("state"));
    const [cities, setCities] = useState<string[]>([]);

    const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const stateValue = event.target.value;
        setSelectedState(stateValue);
    };

    useEffect(() => {
        fetchCities(selectedState, setCities);
    }, [selectedState]);
    return (
        <div>
            <div
                className={`px-4 bg-white border rounded-2xl *:flex *:items-center
                    ${errorCity ? "border-rose-500" : "border-neutral-200"} 
                `}
            >
                <div className="border-b border-neutral-200">
                    <label
                        className="w-[45px] mr-2 text-sm text-neutral-500"
                        htmlFor="state"
                    >
                        استان
                    </label>
                    <select
                        className="flex-grow bg-[unset] border-none p-4 text-neutral-800"
                        id="state"
                        {...register("state")}
                        onChange={handleStateChange}
                    >
                        <option value="">استان</option>
                        <option value="تهران">تهران</option>
                        <option value="گیلان">گیلان</option>
                        <option value="آذربایجان شرقی">آذربایجان شرقی</option>
                        <option value="خوزستان">خوزستان</option>
                        <option value="فارس">فارس</option>
                        <option value="اصفهان">اصفهان</option>
                        <option value="خراسان رضوی">خراسان رضوی</option>
                        <option value="قزوین">قزوین</option>
                        <option value="سمنان">سمنان</option>
                        <option value="قم">قم</option>
                        <option value="مرکزی">مرکزی</option>
                        <option value="زنجان">زنجان</option>
                        <option value="مازندران">مازندران</option>
                        <option value="گلستان">گلستان</option>
                        <option value="اردبیل">اردبیل</option>
                        <option value="آذربایجان غربی">آذربایجان غربی</option>
                        <option value="همدان">همدان</option>
                        <option value="کردستان">کردستان</option>
                        <option value="کرمانشاه">کرمانشاه</option>
                        <option value="لرستان">لرستان</option>
                        <option value="بوشهر">بوشهر</option>
                        <option value="کرمان">کرمان</option>
                        <option value="هرمزگان">هرمزگان</option>
                        <option value="چهارمحال و بختیاری">
                            چهارمحال و بختیاری
                        </option>
                        <option value="یزد">یزد</option>
                        <option value="سیستان و بلوچستان">
                            سیستان و بلوچستان
                        </option>
                        <option value="ایلام">ایلام</option>
                        <option value="کهگلویه و بویراحمد">
                            کهگلویه و بویراحمد
                        </option>
                        <option value="خراسان شمالی">خراسان شمالی</option>
                        <option value="خراسان جنوبی">خراسان جنوبی</option>
                        <option value="البرز">البرز</option>
                    </select>
                </div>
                <div>
                    <label
                        className="w-[45px] mr-2 text-sm text-neutral-500"
                        htmlFor="city"
                    >
                        شهر
                    </label>
                    <select
                        className="flex-grow bg-[unset] border-none p-4 text-neutral-800"
                        id="city"
                        {...register("city")}
                    >
                        {cities.map((city, index) => (
                            <option key={index} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {errorCity && <Error message={errorCity} />}
        </div>
    );
};

export default StateCity;

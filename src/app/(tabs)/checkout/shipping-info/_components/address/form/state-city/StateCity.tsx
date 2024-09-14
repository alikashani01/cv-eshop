import { useContext, useEffect, useState } from "react";
import { Context } from "../../../../_Context";
import { fetchCities } from "./locations";

interface Props {
    state: string;
    city: string;
}

const StateCity = ({ state, city }: Props) => {
    const { onChange } = useContext(Context);

    const [selectedState, setSelectedState] = useState(state);
    const [cities, setCities] = useState<string[]>([]);

    useEffect(() => {
        setSelectedState(state);
    }, [state]);

    useEffect(() => {
        fetchCities(selectedState, setCities);
    }, [selectedState]);
    return (
        <div className="w-full mt-2 rounded-2xl bg-second-theme border border-[#f1f1f1dd] *:flex *:items-center *:px-4">
            <div className="border-b border-neutral-200">
                <label hidden htmlFor="state">
                    استان
                </label>
                <select
                    className="flex-grow bg-[unset] border-none p-4"
                    id="state"
                    name="state"
                    value={state}
                    onChange={onChange}
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
                    <option value="سیستان و بلوچستان">سیستان و بلوچستان</option>
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
                <label hidden htmlFor="city">
                    شهر
                </label>
                <select
                    className="flex-grow bg-[unset] border-none p-4"
                    id="city"
                    name="city"
                    value={city}
                    onChange={onChange}
                >
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default StateCity;

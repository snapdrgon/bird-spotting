import { useMemo, useEffect, useState } from "react";
import { ICurrentWeather } from './models/CurrentWeather';
import { getCurrentWeather } from './services/WeatherService';
import { Locatn } from "./models/Locatn";
//var location: Locatn = { lat: 39.94, lng: -105.12 }
let weatherClear = {
    location: {
        name: '',
        region: '',
        country: '',
        lat: 0,
        lon: 0,
        tz_id: '',
        localtime_epoch: 0,
        localtime: new Date
    },
    current: {
        last_updated_epoch: 0,
        last_updated: new Date,
        temp_c: 0,
        temp_f: 0,
        is_day: 0,
        condition: {
            text: '',
            icon: '',
            code: 0
        },
        wind_mph: 0,
        wind_kph: 0,
        wind_degree: 0,
        wind_dir: '',
        pressure_mb: 0,
        pressure_in: 0,
        precip_mm: 0,
        precip_in: 0,
        humidity: 0,
        cloud: 0,
        feelslike_c: 0,
        feelslike_f: 0,
        vis_km: 0,
        vis_miles: 0,
        uv: 0,
        gust_mph: 0,
        gust_kph: 0
    }
}

//const [weatherInfo, setWeatherInfo] = useState<ICurrentWeather>();
let weatherInfo: ICurrentWeather = weatherClear;
const WeatherInfo = (param:Locatn) => {
    let location = param;
    getCurrentWeather(location).then((response) => {
        weatherInfo = response;
        console.log(weatherInfo);
    }
    )

    getCurrentWeather(location);


    return (
        <>
            {JSON.stringify(weatherInfo)}
        </>
    )
}

export default WeatherInfo
import { ICurrentWeather } from './models/CurrentWeather';
import { getCurrentWeather } from './services/WeatherService';
import { Locatn } from "./models/Locatn";
import WeatherForecast from './WeatherForecast';
import { LangTypeIndex } from './models/LangTypeIndex';
import { getDirection } from './Utilities';
import { useEffect, useState } from 'react';
import { getWeatherMarkerInfo } from './services/FileService';
import { IWeatherMarkerInfo } from './models/WeatherMarkerInfo';
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
const WeatherInfo = (props: { location: Locatn; langTypeIdx: number; }) => {
    const [weatherMarkerInfo, setWeatherMarkerInfo] = useState<IWeatherMarkerInfo | null>();
    let location = props.location;
    let langTypeIdx = props.langTypeIdx;
    getCurrentWeather(location, langTypeIdx).then((response) => {
        weatherInfo = response;
        console.log(weatherInfo);
    }
    )

    const getWeatherMarker = () => {
        getWeatherMarkerInfo().then((response: any) => {
            let weatherMarkerIn: IWeatherMarkerInfo = response;
            setWeatherMarkerInfo(weatherMarkerIn);
        })
    }

    useEffect(() => {
        //  setlangTypeIdx(props.langTypeIdx);
        getWeatherMarker();
      }, [props.langTypeIdx]);

    console.log(`langTypeIdx: ${langTypeIdx}`);
    console.log(weatherMarkerInfo);

    let weatherMarkerInfoItem = weatherMarkerInfo?.WeatherMarkerInfo[langTypeIdx];

    console.log(weatherMarkerInfoItem);

    getCurrentWeather(location, langTypeIdx);

    return (
        <>
            {/* {JSON.stringify(weatherInfo)} */}
            <img src={`https://${weatherInfo.current.condition.icon}`} />
            <div >
                <p>{weatherInfo.location.name}, {weatherInfo.location.region}</p>
                <p>{weatherMarkerInfoItem?.Condition} {weatherInfo.current.condition.text}<br />
                {weatherMarkerInfoItem?.Temperature} {Math.round(weatherInfo.current.temp_f)} {weatherMarkerInfoItem?.Degrees}<br />
                {weatherMarkerInfoItem?.Winds} {getDirection(weatherInfo.current.wind_dir)} {weatherMarkerInfoItem?.At} {Math.round(weatherInfo.current.wind_mph)} {weatherMarkerInfoItem?.Gusts} {Math.round(weatherInfo.current.gust_mph)} {weatherMarkerInfoItem?.Speed}<br />
                    {/* Current Time: {convertEpochTimeToLocalTime(weatherInfo.location.localtime_epoch)} */}
                </p>
            </div>
            <hr />
            <WeatherForecast location={location}  langTypeIdx={langTypeIdx}  />
            <br />

        </>
    )


}

export default WeatherInfo
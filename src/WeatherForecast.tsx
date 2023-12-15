import { getForecastWeather } from './services/WeatherService';
import { Locatn } from "./models/Locatn";
import { IForecastWeather } from './models/ForecastWeather';

let forecastClear: IForecastWeather = {
    location: {
        name: '',
        region: '',
        country: '',
        lat: 0,
        lon: 0,
        tz_id: '',
        localtime_epoch: 0,
        localtime: new Date,
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
    },
    forecast: {
        forecastday: [
            {
                date: new Date,
                date_epoch: 0,
                day: {
                    maxtemp_c: 0,
                    maxtemp_f: 0,
                    mintemp_c: 0,
                    mintemp_f: 0,
                    avgtemp_c: 0,
                    avgtemp_f: 0,
                    maxwind_mph: 0,
                    maxwind_kph: 0,
                    totalprecip_mm: 0,
                    totalprecip_in: 0,
                    totalsnow_cm: 0,
                    avgvis_km: 0,
                    avgvis_miles: 0,
                    avghumidity: 0,
                    daily_will_it_rain: 0,
                    daily_chance_of_rain: 0,
                    daily_will_it_snow: 0,
                    daily_chance_of_snow: 0,
                    condition: {
                        text: '',
                        icon: '',
                        code: 0,
                    },
                    uv: 0,
                },
                astro: {
                    sunrise: new Date,
                    sunset: new Date,
                    moonrise: new Date,
                    moonset: new Date,
                    moon_phase: '',
                    moon_illumination: '',
                    is_moon_up: 0,
                    is_sun_up: 0,
                },
                hour: [
                    {
                        time_epoch: 0,
                        time: new Date,
                        temp_c: 0,
                        temp_f: 0,
                        is_day: 0,
                        condition: {
                            text: '',
                            icon: '',
                            code: 0,
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
                        windchill_c: 0,
                        windchill_f: 0,
                        heatindex_c: 0,
                        heatindex_f: 0,
                        dewpoint_c: 0,
                        dewpoint_f: 0,
                        will_it_rain: 0,
                        chance_of_rain: 0,
                        will_it_snow: 0,
                        chance_of_snow: 0,
                        vis_km: 0,
                        vis_miles: 0,
                        gust_mph: 0,
                        gust_kph: 0,
                        uv: 0,
                    },
                ]
            }

        ]
    }
};

let forecastInfo: IForecastWeather = forecastClear;

const WeatherForecast = (props: { location: Locatn; langTypeIdx: number; }) => {
    let location = props.location;
    let langTypeIdx = props.langTypeIdx;
    getForecastWeather(location, langTypeIdx).then((response) => {
        forecastInfo = response;
        console.log(forecastInfo);
    }
    )

    console.log(`langTypeIdx: ${langTypeIdx}`)

    getForecastWeather(location, langTypeIdx);

    return (
        <>
            {/* {JSON.stringify(forecastInfo)}  */}

            <div id='forecast'>

                <ul className="list-group list-group-horizontal-sm flex-fill justify-content-center">
                    {forecastInfo.forecast.forecastday.slice(1).map(forecastDay =>
                    (

                        <div>
                            <li id="forecastItem" className="list-group-item">
                                
                                {convertEpochToDate(forecastDay.date_epoch)}<br/>
                                <img src={`https://${forecastDay.day.condition.icon}`} /><br />
                                Max Temp: {forecastDay.day.maxtemp_f}<br />
                                Min Temp: {forecastDay.day.mintemp_f}
                            </li>
                            &nbsp;&nbsp;
                        </div>
                    )
                    )}
                </ul>

            </div>

        </>
    )
    function convertEpochToDate(date_epoch: number):string {
        let date = new Date(date_epoch * 1000);
        let dateIndex = date.getUTCDay();
        
        let dateOut = "";
        switch (dateIndex) {
            case 0: dateOut = "Sunday";
            break;
            case 1: dateOut = "Monday";
            break;
            case 2: dateOut = "Tuesday";
            break;
            case 3: dateOut = "Wednesday";
            break;
            case 4: dateOut = "Thursday";
            break;
            case 5: dateOut = "Friday";
            break;
            case 6: dateOut = "Saturday";
            break;       
        }
        console.log(dateIndex, dateOut, date.toLocaleDateString(), date_epoch);
        return dateOut;
    }

}
export default WeatherForecast;

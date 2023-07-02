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

const WeatherForecast = (param: Locatn) => {
    let location = param;
    getForecastWeather(location).then((response) => {
        forecastInfo = response;
        console.log(forecastInfo);
    }
    )

    getForecastWeather(location);

    const direction = (compassPoint: string) => {
        switch (compassPoint) {
            case 'N':
                return 'north';
                break;
            case 'NE':
                return 'north east';
                break;
            case 'NNE':
                return 'north north east';
                break;
            case 'NW':
                return 'north west';
                break;
            case 'NNW':
                return 'north north west';
                break;
            case 'S':
                return 'south';
                break;
            case 'SE':
                return 'south east';
                break;
            case 'SSE':
                return 'south south east';
                break;
            case 'SW':
                return 'south west';
                break;
            case 'SSW':
                return 'south south west';
                break;
            case 'E':
                return 'east';
                break;
            case 'ENE':
                return 'east north east';
                break;
            case 'ESE':
                return 'east south east';
                break;
            case 'W':
                return 'west';
                break;
            case 'WSW':
                return 'west south west';
                break;
            case 'WNW':
                return 'west north west';
                break;

        }
    }

    return (
        <>
           {/* {JSON.stringify(forecastInfo)}  */}

           <div>
            {forecastInfo.forecast.forecastday.map(forecastDay =>
               (
                <div id='forecast'>{forecastDay.day.maxtemp_f}&nbsp;</div>
               )
            )}
         </div>
        </>
    )

}
export default WeatherForecast;

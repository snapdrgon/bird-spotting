import axios from 'axios';
import { Locatn } from '../models/Locatn';
import { ICurrentWeather } from '../models/CurrentWeather';
import { IForecastWeather } from '../models/ForecastWeather';
import { getLangAbrevWeather } from '../Utilities';
const baseUrl = import.meta.env.VITE_WEATHER_BASE_URL;
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
let weatherClear:ICurrentWeather = {
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

let forecastClear:IForecastWeather =  {
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

function current(location: Locatn, langTypeIdx:number): Promise<ICurrentWeather> {
    return new Promise((resolve, reject) => {
        console.log(location);
        let url = `${baseUrl}/current.json?key=${weatherApiKey}&q=${location.lat}, ${location.lng}&lang=${getLangAbrevWeather(langTypeIdx)}`;
        let weatherCurrent: ICurrentWeather;
        axios.get(url).then((response) => {
            weatherCurrent = response.data;
            console.log(weatherCurrent);
            resolve(weatherCurrent);
        }).catch(() => {
            reject("Unable to retrieve Current Weather");
        });

    })
}

export async function getCurrentWeather(location: Locatn, langTypeIdx:number): Promise<ICurrentWeather> {
    let weatherCurrentReturn: ICurrentWeather = weatherClear;
    try {
        weatherCurrentReturn = await current(location, langTypeIdx)
    }
    catch (err) {
        console.log(err);
    }
    return weatherCurrentReturn;
}

//http://api.weatherapi.com/v1/forecast.json?key=&q=London&days=1&aqi=no&alerts=no

function forecast(location: Locatn, langTypeIdx:number): Promise<IForecastWeather> {
    return new Promise((resolve, reject) => {
        console.log(location);
        let url = `${baseUrl}/forecast.json?key=${weatherApiKey}&q=${location.lat}, ${location.lng}&lang=${getLangAbrevWeather(langTypeIdx)}&days=5`;
        let weatherForecast: IForecastWeather;
        axios.get(url).then((response) => {
            weatherForecast = response.data;
            console.log(weatherForecast);
            resolve(weatherForecast);
        }).catch(() => {
            reject("Unable to retrieve Forecast Weather");
        });

    })
}

export async function getForecastWeather(location: Locatn, langTypeIdx:number): Promise<IForecastWeather> {
    let weatherForecastReturn: IForecastWeather = forecastClear;
    try {
        weatherForecastReturn = await forecast(location, langTypeIdx)
    }
    catch (err) {
        console.log(err);
    }
    return weatherForecastReturn;
}


import axios from 'axios';
import { Locatn } from '../models/Locatn';
import {ICurrentWeather}  from '../models/CurrentWeather';
const baseUrl = import.meta.env.VITE_WEATHER_BASE_URL;
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
let weatherClear =  {location: {
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
}}

function current(location: Locatn) : Promise<ICurrentWeather> {
    return new Promise((resolve, reject) => {
        console.log(location);
        let url = `${baseUrl}/current.json?key=${weatherApiKey}&q=${location.lat}, ${location.lng}`;
        let weatherCurrent: ICurrentWeather;
        axios.get(url).then((response) => {
            weatherCurrent = response.data;
            console.log(weatherCurrent);
            resolve(weatherCurrent);
        }).catch(()=>{
            reject("Unable to retrieve Current Weather");
        });
        
    })
}

export async function getCurrentWeather(location: Locatn): Promise<ICurrentWeather> {
    let weatherCurrentReturn: ICurrentWeather  = weatherClear;
    try {
        weatherCurrentReturn = await current(location)
    }
    catch (err) {
        console.log(err);
    }
    return weatherCurrentReturn;
}


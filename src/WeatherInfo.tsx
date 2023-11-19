import { ICurrentWeather } from './models/CurrentWeather';
import { getCurrentWeather } from './services/WeatherService';
import { Locatn } from "./models/Locatn";
import WeatherForecast from './WeatherForecast';
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
const WeatherInfo = (param: Locatn) => {
    let location = param;
    getCurrentWeather(location).then((response) => {
        weatherInfo = response;
        console.log(weatherInfo);
    }
    )

// const convertEpochTimeToLocalTime=(utcSeconds: number):string =>
// {
//     let date = new Date(0); 
//     date.setUTCSeconds(utcSeconds);
//     return date.toLocaleTimeString();
// }

    getCurrentWeather(location);
    
    const direction = (compassPoint: string) => {
        switch (compassPoint) {
            case 'N':
                return 'north';
                break;
            case 'NE':
                return 'northeast';
                break;
            case 'NNE':
                return 'north northeast';
                break;
            case 'NW':
                return 'northwest';
                break;
            case 'NNW':
                return 'north northwest';
                break;
            case 'S':
                return 'south';
                break;
            case 'SE':
                return 'southeast';
                break;
            case 'SSE':
                return 'south southeast';
                break;
            case 'SW':
                return 'southwest';
                break;
            case 'SSW':
                return 'south southwest';
                break;
            case 'E':
                return 'east';
                break;
            case 'ENE':
                return 'east northeast';
                break;
            case 'ESE':
                return 'east southeast';
                break;
            case 'W':
                return 'west';
                break;
            case 'WSW':
                return 'west southwest';
                break;
            case 'WNW':
                return 'west northwest';
                break;

        }
    }

    return (
        <>
            {/* {JSON.stringify(weatherInfo)} */}
            <img src={`https://${weatherInfo.current.condition.icon}`} />
            <div >
                <p>{weatherInfo.location.name}, {weatherInfo.location.region}</p>
                <p>Current Condition: {weatherInfo.current.condition.text}<br />
                    Temperature: {weatherInfo.current.temp_f} degrees F<br />
                    Winds out of the {direction(weatherInfo.current.wind_dir)} at {weatherInfo.current.wind_mph} mph with gusts up to {weatherInfo.current.gust_mph} mph<br />
                    {/* Current Time: {convertEpochTimeToLocalTime(weatherInfo.location.localtime_epoch)} */}
                </p>
            </div> 
            <hr />
            <WeatherForecast lat={location.lat} lng={location.lng}/>
            <br />
           
        </>
    )


}

export default WeatherInfo
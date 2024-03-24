import axios from 'axios';
import { IWebMarkup } from '../models/WebMarkup';
import { IMarkerInfo } from '../models/MarkerInfo';
import { IWeatherMarkerInfo } from '../models/WeatherMarkerInfo';

// let markerInfoClear: IMarkerInfo = {
//     MarkerInfo: [
//         {
//             Single: '',
//             Multi: '',
//             Lang: ''
//         }

//     ]
// }

// let webMarkClear: IWebMarkup = {
//     Markup: [
//         {
           
//             Title:
//             {
//                 Desc: ''
//             },
//             Descriptions:
//             {
//                 Desc: ''
//             },
//             Disclaimers:
//             {
//                 Disclaimer: ''
//             },
//             Information:
//             {
//                 Info: '',
//                 And: ''
//             },
//             PhotoInfo:
//             {
//                 Photo: ''
//             },
//             Powered:
//             {
//                 Info: ''
//             },
//             SiteIcon:
//             {
//                 Icon: '',
//                 From: ''
//             },
//             Contact:
//             {
//                 Info: ''
//             }

//         }
//     ]
// }

let weatherMarkerInfoClear:IWeatherMarkerInfo = {
    WeatherMarkerInfo: [
        {
            Condition: '',
            Temperature: '',
            Degrees: '',
            Winds: '',
            At: '',
            Gusts: '',
            Speed: '',
            Max: '',
            Min: ''
        }
    ]
}

function weatherMarkerInfo(): Promise<IWeatherMarkerInfo> {
    return new Promise((resolve, reject) => {
        let url = "../weathermarkerinfo.json";
        let weatherMarkerInfo: IWeatherMarkerInfo;
        axios.get(url).then((response) => {
            weatherMarkerInfo = response.data;
            //console.log(weatherMarkerInfo);
            resolve(weatherMarkerInfo);
        }).catch(() => {
            reject("Unable to retrieve Weather Marker Info");
        });

    })
}

export async function getWeatherMarkerInfo(): Promise<IWeatherMarkerInfo> {
    let weatherInfoReturn: IWeatherMarkerInfo = weatherMarkerInfoClear;
    try {
        weatherInfoReturn = await weatherMarkerInfo();
        //console.log(weatherInfoReturn);
    }
    catch (err) {
        //console.log(err);
    }
    return weatherInfoReturn;
}
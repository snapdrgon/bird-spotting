import axios from 'axios';
import { IWebMarkup } from '../models/WebMarkup';
import { IMarkerInfo } from '../models/MarkerInfo';
import { IWeatherMarkerInfo } from '../models/WeatherMarkerInfo';

let markerInfoClear: IMarkerInfo = {
    MarkerInfo: [
        {
            Single: '',
            Multi: '',
            Lang: ''
        }

    ]
}

let webMarkClear: IWebMarkup = {
    Markup: [
        {
           
            Title:
            {
                Desc: ''
            },
            Descriptions:
            {
                Desc: ''
            },
            Disclaimers:
            {
                Disclaimer: ''
            },
            Information:
            {
                Info: '',
                And: ''
            },
            PhotoInfo:
            {
                Photo: ''
            },
            Powered:
            {
                Info: ''
            },
            SiteIcon:
            {
                Icon: '',
                From: ''
            },
            Contact:
            {
                Info: ''
            }

        }
    ]
}

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

function markUpIn(): Promise<IWebMarkup> {
    return new Promise((resolve, reject) => {
        let url = "../json/markup.json";
        let webMarkupIn: IWebMarkup;
        axios.get(url).then((response) => {
            webMarkupIn = response.data;
            console.log(webMarkupIn);
            resolve(webMarkupIn);
        }).catch(() => {
            reject("Unable to retrieve Web Markup");
        });

    })
}

export async function getMarkup(): Promise<IWebMarkup> {
    let webMarkupReturn: IWebMarkup = webMarkClear;
    try {
        webMarkupReturn = await markUpIn();
        console.log(webMarkupReturn);
    }
    catch (err) {
        console.log(err);
    }
    return webMarkupReturn;
}

function markerInfoIn(): Promise<IMarkerInfo> {
    return new Promise((resolve, reject) => {
        let url = "../json/markerinfo.json";
        let markerInfo: IMarkerInfo;
        axios.get(url).then((response) => {
            markerInfo = response.data;
            console.log(markerInfo);
            resolve(markerInfo);
        }).catch(() => {
            reject("Unable to retrieve Web Markup");
        });

    })
}

export async function getMarker(): Promise<IMarkerInfo> {
    let markerInfoReturn: IMarkerInfo = markerInfoClear;
    try {
        markerInfoReturn = await markerInfoIn();
        console.log(markerInfoReturn);
    }
    catch (err) {
        console.log(err);
    }
    return markerInfoReturn;
}

function weatherMarkerInfo(): Promise<IWeatherMarkerInfo> {
    return new Promise((resolve, reject) => {
        let url = "../json/weathermarkerinfo.json";
        let weatherMarkerInfo: IWeatherMarkerInfo;
        axios.get(url).then((response) => {
            weatherMarkerInfo = response.data;
            console.log(weatherMarkerInfo);
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
        console.log(weatherInfoReturn);
    }
    catch (err) {
        console.log(err);
    }
    return weatherInfoReturn;
}
import axios from 'axios';
import { IWebMarkup } from '../models/WebMarkup';

let markupClear:IWebMarkup= {
    Markup: [
        {
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
                Info: ''
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
            }

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
    let webMarkupReturn: IWebMarkup = markupClear;
    try {
        webMarkupReturn = await markUpIn();
        console.log(webMarkupReturn);
    }
    catch (err) {
        console.log(err);
    }
    return webMarkupReturn;
}
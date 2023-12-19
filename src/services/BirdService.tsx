import axios from 'axios';
import { Locatn } from '../models/Locatn';
import { IBirdDataIn } from '../models/BirdDataIn';
import { IBirdObserver } from '../models/BirdObserver'
import { IMarkerInfo } from '../models/MarkerInfo';
import { getLangAbrev } from '../Utilities';
const baseUrl = import.meta.env.VITE_EBIRD_API_URL;
const ebirdBaseUrl = import.meta.env.VITE_EBIRD_BASE_URL;
const eBirdApiKey = import.meta.env.VITE_EBIRD_API_KEY;

function birds(location: Locatn, language:string) : Promise<IBirdObserver[]> {
    return new Promise((resolve, reject) => {
        let birdList: IBirdObserver[] = [];
        let birds: IBirdDataIn[] | null;
        birds = [];
        //console.log(location);
        let url = `${baseUrl}?lat=${location.lat}&lng=${location.lng}&sppLocale=${language}`; //en, fr, esp
        birdList = [];
        axios.get(url,
            {
                headers: {
                    'X-eBirdApiToken': eBirdApiKey
                }
            }
        ).then((response) => {
            birds = response.data;
            //console.log(birds);
            birds?.map((bird) => {
                birdList.push({
                    birdSpeciesUrl: `${ebirdBaseUrl}${bird.speciesCode}`,
                    name: bird.comName,
                    speciesCode: bird.speciesCode,
                    scientificName: bird.sciName,
                    numberSpotted: bird.howMany,
                    dateObserved: bird.obsDt,
                    location: bird.locName,
                    lat: bird.lat,
                    lng: bird.lng
                });
            });
            resolve(birdList);
        }).catch(()=>{
            reject("Unable to retrieve BirdList");
        });
        
    })
}

export async function getBirds(location: Locatn, langTypeIdx:number): Promise<IBirdObserver[]> {
    let lang = getLangAbrev(langTypeIdx);
    //console.log(`getBirds ${lang}`)
    let birdListReturn: IBirdObserver[] = [];
    try {
        birdListReturn = await birds(location, lang)
    }
    catch (err) {
        //console.log(err);
    }
    return birdListReturn;
}


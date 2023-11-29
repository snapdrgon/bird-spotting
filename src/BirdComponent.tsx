import BirdMapComponent from './BirdMapComponent';
import { useMemo, useEffect, useState } from "react";
import { LanguageType } from './enumerators/Language';
import { IWebMarkup } from './models/WebMarkup';
import { getForecastWeather } from './services/WeatherService';
import { getMarkup } from './services/FileService';
import { LangTypeIndex } from './models/LangTypeIndex';

export default function BirdComponent(param: LangTypeIndex) {

    const [webMarkup, setwebMarkup] = useState<IWebMarkup | null>();
    const [langTypeIdx, setlangTypeIdx] = useState(param.langTypeIdx);
 
    // const getLangIndex = (): number => {
    //     let langIndex = 0;
    //     let languageType = localStorage.getItem("languageType");
    //     if (languageType == null) {
    //         //set default english
    //         localStorage.setItem('languageType', LanguageType.English);
    //         languageType = localStorage.getItem("languageType");
    //     }
    //     switch (languageType) {
    //         case LanguageType.English:
    //             langIndex = 0;
    //             break;
    //         case LanguageType.Español:
    //             langIndex = 1;
    //             break;
    //         case LanguageType.Français:
    //             langIndex = 2;
    //             break;
    //     }
    //     return langIndex;
    // }
    // const [languageIndex, setLanguageIndex] = useState({"langIndex":getLangIndex()});
  

    const getMarkupInfo = () => {
        getMarkup().then((response) => {
            let markupIn: IWebMarkup = response;
            setwebMarkup(markupIn);
        })
    }

    useEffect(() => {

        //grab the markup
        setlangTypeIdx(param.langTypeIdx);
        getMarkupInfo();
    }, [param.langTypeIdx]);

    console.log(JSON.stringify(webMarkup));
    console.log(`langTypeIdx: ${langTypeIdx}`);

    let markup = webMarkup?.Markup[langTypeIdx];

    return (
        <>
            <div className="jumbotron">
                <h1 className="display-3">Bird Spotting</h1>
                <br />
                <br />
                <p className="lead">{markup?.Descriptions.Desc}<a href="http://ebird.org/content/ebird/" target="_blank">eBird</a>

                </p>
                <hr className="my-4" />
                <p className="lead">If you want additional information on the birds spotted, suggested sites include
                    <a href="https://www.allaboutbirds.org/" target="_blank" >All About Birds</a> and <a href="http://www.audubon.org/birds/"
                        target="_blank" >Audubon</a>.</p>
                <p id="disclaimer"><strong>Please note that TakWare LLC is not associated with the Cornell Lab of Ornithology or Audubon.</strong></p>
            </div>
            <em id="credit"><a href="https://www.pexels.com/u/annaelk/" target="_blank">Photo by Adrianna Calvo on Pexels</a></em>
            <BirdMapComponent />
            <footer id="footer">
                <hr />
                <address>
                    <span><div id="snapmail"><a href="mailto:admin@bird-spotting.com">contact us</a></div></span>
                    <span id="profile"><div id="company">TakWare LLC<sup>&copy;</sup></div></span>
                </address>
                <br />

                <div id="siteicon">Site Icon made by <a href="http://www.freepik.com/" target="_blank">Freepik</a> from <a
                    href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a><br />
                    Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></div>

                <br /><br />
            </footer>


        </>
    );
}  

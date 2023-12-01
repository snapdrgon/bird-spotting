import BirdMapComponent from './BirdMapComponent';
import { useMemo, useEffect, useState } from "react";
import { LanguageType } from './enumerators/Language';
import { IWebMarkup } from './models/WebMarkup';
import { getForecastWeather } from './services/WeatherService';
import { getMarkup } from './services/FileService';
import { LangTypeIndex } from './models/LangTypeIndex';

export default function BirdComponent(props: { langTypeIdx: number; }) {

    const [webMarkup, setwebMarkup] = useState<IWebMarkup | null>();
    // const [langTypeIdx, setlangTypeIdx] = useState(props.langTypeIdx);
    let langTypeIdx = props.langTypeIdx;

       const getMarkupInfo = () => {
        getMarkup().then((response) => {
            let markupIn: IWebMarkup = response;
            setwebMarkup(markupIn);
        })
    }

    useEffect(() => {

        //grab the markup
        // setlangTypeIdx(props.langTypeIdx);
        getMarkupInfo();
    }, [props.langTypeIdx]);

    console.log(JSON.stringify(webMarkup));
    console.log(`langTypeIdx: ${langTypeIdx}`);

    let markup = webMarkup?.Markup[langTypeIdx];

    return (
        <>
            <div className="jumbotron">
                <h1 className="display-3">{markup?.Title.Desc}</h1>
                <br />
                <br />
                <p className="lead">{markup?.Descriptions.Desc}<a href="http://ebird.org/content/ebird/" target="_blank">eBird</a>

                </p>
                <hr className="my-4" />
                <p className="lead">{markup?.Information.Info}
                    <a href="https://www.allaboutbirds.org/" target="_blank" >All About Birds</a> {markup?.Information.And} <a href="http://www.audubon.org/birds/"
                        target="_blank" >Audubon</a>.</p>
                <p id="disclaimer"><strong>{markup?.Disclaimers.Disclaimer}</strong></p>
            </div>
            <em id="credit"><a href="https://www.pexels.com/u/annaelk/" target="_blank">{markup?.PhotoInfo.Photo}</a></em>
            <BirdMapComponent langTypeIdx={langTypeIdx} />
            <footer id="footer">
                <hr />
                <address>
                    <span><div id="snapmail"><a href="mailto:admin@bird-spotting.com">{markup?.Contact.Info}</a></div></span>
                    <span id="profile"><div id="company">TakWare LLC<sup>&copy;</sup></div></span>
                </address>
                <br />

                <div id="siteicon">{markup?.SiteIcon.Icon} <a href="http://www.freepik.com/" target="_blank">Freepik</a> {markup?.SiteIcon.From}<a
                    href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a><br />
                    {markup?.Powered.Info} <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></div>

                <br /><br />
            </footer>


        </>
    );
}  

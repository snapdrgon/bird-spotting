import BirdMapComponent from './BirdMapComponent';
import { useMemo, useEffect, useState } from "react";
import { LanguageType } from './enumerators/Language';
import { IWebMarkup } from './models/WebMarkup';
import { getForecastWeather } from './services/WeatherService';
import { getMarkup } from './services/FileService';
import { LangTypeIndex } from './models/LangTypeIndex';
import { Helmet } from 'react-helmet-async';

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

    //console.log(JSON.stringify(webMarkup));
    //console.log(`langTypeIdx: ${langTypeIdx}`);

    let markup = webMarkup?.Markup[langTypeIdx];

    return (
        <>
            <Helmet>
                <title>Repérage des oiseaux</title>
                <meta name='description' content='Repérage des oiseaux' />
            </Helmet>
            <div className="jumbotron">
                <h1 className="display-3">Repérage des oiseaux</h1>
                <br />
                <br />
                <p className="lead">La carte de repérage des oiseaux ci-dessous vous permet de double-cliquer sur la carte et tous les oiseaux repérés dans la région seront marqués avec le nom commun de l'oiseau, le nombre d'oiseaux repérés et la localisation. Si vous cliquez sur le nom de l'oiseau, un nouvel onglet de navigateur s'ouvrira et vous dirigera vers une page web sur eBird contenant des informations supplémentaires. Les informations sont fournies par le Cornell Lab of Ornithology eBird API. Pour plus d'informations sur la manière dont vous pouvez contribuer à enrichir la base de données des oiseaux observés dans votre région, vous pouvez consulter le site suivant <a href="http://ebird.org/content/ebird/" target="_blank">eBird</a>

                </p>
                <hr className="my-4" />
                <p className="lead">Si vous souhaitez obtenir des informations complémentaires sur les oiseaux repérés, les sites suivants vous sont proposés
                    <a href="https://www.allaboutbirds.org/" target="_blank" >All About Birds</a> et <a href="http://www.audubon.org/birds/"
                        target="_blank" >Audubon</a>.</p>
                <p id="disclaimer"><strong>Veuillez noter que TakWare LLC n'est pas associé au Cornell Lab of Ornithology ou à Audubon.</strong></p>
            </div>
            <em id="credit"><a href="https://www.pexels.com/u/annaelk/" target="_blank">Photo par Adrianna Calvo sur Pexels</a></em>
            <BirdMapComponent langTypeIdx={langTypeIdx} />
            <footer id="footer">
                <hr />
                <address>
                    <span><div id="snapmail"><a href="mailto:admin@bird-spotting.com">Contactez-nous</a></div></span>
                    <span id="profile"><div id="company">TakWare LLC<sup>&copy;</sup></div></span>
                </address>
                <br />

                <div id="siteicon">Icône du site réalisée par  <a href="http://www.freepik.com/" target="_blank">Freepik</a>  de <a
                    href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a><br />
                    Propulsé par <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></div>

                <br /><br />
            </footer>


        </>
    );
}  

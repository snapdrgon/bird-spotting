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
                <title>Observación de aves</title>
                <meta name='description' content='Observación de aves' />
                <link rel='canonical' href='https://bird-spotting.com/' />
            </Helmet>
            <div className="jumbotron">
                <h1 className="display-3">Observación de aves</h1>
                <br />
                <br />
                <p className="lead">El mapa de avistamiento de aves que aparece a continuación le permite hacer doble clic en el mapa y cualquier ave avistada en la zona se marcará con el nombre común del ave, el número avistado y la ubicación. Si hace clic en el nombre del ave, se abrirá una nueva pestaña del navegador que le dirigirá a una página web de eBird con información adicional. La información se facilita a través de la API de eBird del Laboratorio de Ornitología de Cornell. Para obtener más información sobre cómo contribuir a la base de datos de aves observadas en su zona, visite la siguiente dirección <a href="http://ebird.org/content/ebird/" target="_blank">eBird</a>

                </p>
                <hr className="my-4" />
                <p className="lead">Si desea más información sobre las aves avistadas, le sugerimos los siguientes sitios web
                    <a href="https://www.allaboutbirds.org/" target="_blank" >All About Birds</a> y <a href="http://www.audubon.org/birds/"
                        target="_blank" >Audubon</a>.</p>
                <p id="disclaimer"><strong>Tenga en cuenta que TakWare LLC no está asociada con el Laboratorio de Ornitología de Cornell ni con Audubon.</strong></p>
            </div>
            <em id="credit"><a href="https://www.pexels.com/u/annaelk/" target="_blank">Foto de Adrianna Calvo en Pexels</a></em>
            <BirdMapComponent langTypeIdx={langTypeIdx} />
            <footer id="footer">
                <hr />
                <address>
                    <span><div id="snapmail"><a href="mailto:admin@bird-spotting.com">Contáctenos</a></div></span>
                    <span id="profile"><div id="company">TakWare LLC<sup>&copy;</sup></div></span>
                </address>
                <br />

                <div id="siteicon">Icono del sitio realizado por  <a href="http://www.freepik.com/" target="_blank">Freepik</a>  de <a
                    href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a><br />
                    Desarrollado por  <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></div>

                <br /><br />
            </footer>


        </>
    );
}  

import { useState } from "react";
import { LanguageType } from "../src/enumerators/Language";
import BirdComponenten from "./BirdComponenten";
import BirdComponentesp from "./BirdComponentesp";
import BirdComponentfr from "./BirdComponentfr";
export default function MenuComponent() {


    const getLangIndex = (): number => {
        let langIndex = 0;
        let languageType = localStorage.getItem("languageType");
        if (languageType == null) {
            //set default english
            localStorage.setItem('languageType', LanguageType.English);
            languageType = localStorage.getItem("languageType");
        }
        switch (languageType) {
            case LanguageType.English:
                langIndex = 0;
                break;
            case LanguageType.Español:
                langIndex = 1;
                break;
            case LanguageType.Français:
                langIndex = 2;
                break;
        }
        return langIndex;
    }

    const getLanguageType = (langIndex:number):LanguageType => {
        let langTypeOut= LanguageType.English;
        switch (langIndex) {
            case 0:
                langTypeOut = LanguageType.English;
                break;
            case 1:
                langTypeOut = LanguageType.Español ;
                break;
            case 2:
                langTypeOut = LanguageType.Français;
                break;
        }
        return langTypeOut;
    }


    const [langTypeIdx, setlangTypeIdx] = useState(getLangIndex());

    const callBirdComponent = (language: LanguageType):JSX.Element => {
        switch (language) {
            case LanguageType.English:
                return <BirdComponenten langTypeIdx={langTypeIdx} />;
            case LanguageType.Español:
                return <BirdComponentesp langTypeIdx={langTypeIdx} />;
            case LanguageType.Français:
                return <BirdComponentfr langTypeIdx={langTypeIdx} />;
        }

    }


    const setLanguage = (language: LanguageType) => {
        //console.log(`Language: ${language}`);
        localStorage.setItem('languageType', language);
        let idx = getLangIndex();
        setlangTypeIdx(idx);
    }


    return (
        <>
            <div className="btn-group" id="languageMenu">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Language
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><button className="dropdown-item" type="button" onClick={() =>setLanguage(LanguageType.English)}>English</button></li>
                    <li><button className="dropdown-item" type="button" onClick={() =>setLanguage(LanguageType.Español)}>Español</button></li>
                    <li><button className="dropdown-item" type="button" onClick={() =>setLanguage(LanguageType.Français)}>Français</button></li>

                </ul>
            </div>
           { callBirdComponent(getLanguageType(langTypeIdx))}
        </>
    );
}  

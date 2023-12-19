import { useState } from "react";
import {LanguageType} from "../src/enumerators/Language";
import BirdComponent from "./BirdComponent";
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

    const [langTypeIdx, setlangTypeIdx] = useState(getLangIndex());

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
                    <li><button className="dropdown-item" type="button" onClick={() => setLanguage(LanguageType.English)}>English</button></li>
                    <li><button className="dropdown-item" type="button" onClick={() => setLanguage(LanguageType.Español)}>Español</button></li>
                    <li><button className="dropdown-item" type="button" onClick={() => setLanguage(LanguageType.Français)}>Français</button></li>

                </ul>
            </div>
            <BirdComponent langTypeIdx={langTypeIdx} />
        </>
    );
}  

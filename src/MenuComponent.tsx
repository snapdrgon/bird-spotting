import {LanguageType} from "../src/enumerators/Language";
import BirdComponent from "./BirdComponent";
export default function MenuComponent() {

    const setLanguage = (language: LanguageType) => {
        console.log(`Language: ${language}`);
        localStorage.setItem('languageType', language);
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
        </>
    );
}  

export default function getLangAbrev(langTypeIdx: number): string {
    let lang = "";
    switch (langTypeIdx) {
        case 0: 
        lang = "en"; 
        break;
        case 1: 
        lang = "esp"; 
        break;
        case 2: 
        lang = "fr"; 
        break;
    }
    return lang;
}

export function getLangAbrev(langTypeIdx: number): string {
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

export function getLangAbrevWeather(langTypeIdx: number): string {
    let lang = "";
    switch (langTypeIdx) {
        case 0: 
        lang = "en"; 
        break;
        case 1: 
        lang = "es"; 
        break;
        case 2: 
        lang = "fr"; 
        break;
    }
    return lang;
}

export function getDirection(compassPoint: string) : string {
    let direction = "";
    switch (compassPoint) {
        case 'N':
            direction =  'north';
            break;
        case 'NE':
            direction = 'northeast';
            break;
        case 'NNE':
            direction = 'north northeast';
            break;
        case 'NW':
            direction = 'north west';
            break;
        case 'NNW':
            direction = 'north northwest';
            break;
        case 'S':
            direction =  'south';
            break;
        case 'SE':
            direction = 'southeast';
            break;
        case 'SSE':
            direction = 'south southeast';
            break;
        case 'SW':
            direction = 'southwest';
            break;
        case 'SSW':
            direction = 'south southwest';
            break;
        case 'E':
            direction =  'east';
            break;
        case 'ENE':
            direction = 'east northeast';
            break;
        case 'ESE':
            direction = 'east southeast';
            break;
        case 'W':
            direction = 'west';
            break;
        case 'WSW':
            direction = 'west southwest';
            break;
        case 'WNW':
            direction = 'west northwest';
            break;

    }
    return direction;
}


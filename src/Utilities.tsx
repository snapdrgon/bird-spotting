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

export function getDirection(compassPoint: string, langTypeIdx: number): string {
    let direction = "";
    if (langTypeIdx == 0) {
        switch (compassPoint) {
            case 'N':
                direction = 'north';
                break;
            case 'NE':
                direction = 'northeast';
                break;
            case 'NNE':
                direction = 'north northeast';
                break;
            case 'NW':
                direction = 'northwest';
                break;
            case 'NNW':
                direction = 'north northwest';
                break;
            case 'S':
                direction = 'south';
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
                direction = 'east';
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
    }
    if (langTypeIdx == 1) {
        switch (compassPoint) {
            case 'N':
                direction = 'norte';
                break;
            case 'NE':
                direction = 'noreste';
                break;
            case 'NNE':
                direction = 'norte noreste';
                break;
            case 'NW':
                direction = 'noroeste';
                break;
            case 'NNW':
                direction = 'noroeste';
                break;
            case 'S':
                direction = 'sur';
                break;
            case 'SE':
                direction = 'sureste';
                break;
            case 'SSE':
                direction = 'sur sureste';
                break;
            case 'SW':
                direction = 'suroeste';
                break;
            case 'SSW':
                direction = 'suroeste';
                break;
            case 'E':
                direction = 'este';
                break;
            case 'ENE':
                direction = 'este noreste';
                break;
            case 'ESE':
                direction = 'este sureste';
                break;
            case 'W':
                direction = 'oeste';
                break;
            case 'WSW':
                direction = 'oeste suroeste';
                break;
            case 'WNW':
                direction = 'west northwest';
                break;
        }
    }
    if (langTypeIdx == 2) {
        switch (compassPoint) {
            case 'N':
                direction = 'nord';
                break;
            case 'NE':
                direction = 'nord-est';
                break;
            case 'NNE':
                direction = 'nord-nord-est';
                break;
            case 'NW':
                direction = 'nord-ouest';
                break;
            case 'NNW':
                direction = 'nord nord-ouest';
                break;
            case 'S':
                direction = 'sud';
                break;
            case 'SE':
                direction = 'sud-est';
                break;
            case 'SSE':
                direction = 'sud sud-est';
                break;
            case 'SW':
                direction = 'sud-ouest';
                break;
            case 'SSW':
                direction = 'sud sud-ouest';
                break;
            case 'E':
                direction = 'est';
                break;
            case 'ENE':
                direction = 'est nord-est';
                break;
            case 'ESE':
                direction = 'est sud-est';
                break;
            case 'W':
                direction = 'ouest';
                break;
            case 'WSW':
                direction = 'ouest sud-ouest';
                break;
            case 'WNW':
                direction = 'ouest nord-ouest';
                break;
        }
    }
    return direction;
}


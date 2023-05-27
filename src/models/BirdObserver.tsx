export interface IBirdObserver {
    name: string;
    speciesCode:string;
    birdSpeciesUrl:string;
    scientificName: string;
    numberSpotted: number;
    dateObserved: Date;
    location: string;
    lat: number;
    lng: number;
}
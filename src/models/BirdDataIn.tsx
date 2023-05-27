export interface BirdDataIn {
    speciesCode : string;
    comName :  string;
    sciName :  string;
    locId :  string;
    locName : string;
    obsDt : Date;
    howMany : number;
    lat : number;
    lng : number;
    obsValid : boolean;
    obsReviewed : boolean;
    locationPrivate : boolean;
    subId :  string;
 }
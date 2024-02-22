import { useMemo, useEffect, useState } from "react";
import WeatherInfo, { } from './WeatherInfo'
import { Locatn } from "./models/Locatn";
import { getBirds } from "./services/BirdService";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { IBirdObserver } from './models/BirdObserver'
import { LangTypeIndex } from "./models/LangTypeIndex";
import { IMarkerInfo } from "./models/MarkerInfo";
import { getMarker} from './services/FileService';

var location: Locatn = { lat: 39.94, lng: -105.12 }

const SpottingMap = (props: { langTypeIdx: number; }) => {
const [markerInfo, setMarkerInfo] = useState<IMarkerInfo | null>();

  //const [langTypeIdx, setlangTypeIdx] = useState(props.langTypeIdx);
  let langTypeIdx = props.langTypeIdx;

  const getMarkerInfo = () => {
    getMarker().then((response) => {
        let markerIn: IMarkerInfo = response;
        setMarkerInfo(markerIn);
    })
}

  let birdClear = {
    name: "",
    speciesCode: "",
    birdSpeciesUrl: "",
    scientificName: "",
    numberSpotted: 0,
    dateObserved: new Date,
    location: "",
    lat: 0,
    lng: 0
  };
     
  useEffect(() => {
  //  setlangTypeIdx(props.langTypeIdx);
    getMarkerInfo();
}, [props.langTypeIdx]);

  //console.log(JSON.stringify(markerInfo));
  //console.log(`langTypeIdx: ${langTypeIdx}`);
  let markerInfoItem = markerInfo?.MarkerInfo[langTypeIdx];

  const [selected, setSelected] = useState(birdClear);
  const [birds, setBirds] = useState<IBirdObserver[] | null>();

  var birdList: IBirdObserver[] = [];
  const center = useMemo(() => (location), [location])

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        location = { lat: position.coords.latitude, lng: position.coords.longitude };
        //console.log(location);
      })
    }
    else {
      //console.log("Geolocation is not supported by this browser. Using Broomfield, CO longitude and latitude.");
      location = { lat: 39.94, lng: -105.12 };
      //console.log(location);
    }
  }

  const setBirdList = (location: Locatn) => {
    getBirds(location, langTypeIdx).then((response) => {
      let bufferBird = response;
      birdList = [];
      bufferBird.map(item => {
        birdList.push({
          birdSpeciesUrl: item.birdSpeciesUrl,
          name: item.name,
          speciesCode: item.speciesCode,
          scientificName: item.scientificName,
          numberSpotted: item.numberSpotted,
          dateObserved: item.dateObserved,
          location: item.location,
          lat: item.lat,
          lng: item.lng
        });
      })
      setBirds(birdList);
    });
    //console.log(birds);
  }

  useEffect(() => {
    //grab the geolocation
    getGeoLocation();
    //console.log(location);
    setBirdList(location);
  }, []);

  const placeMarker = (e: any) => {
    setSelected(birdClear);
    location = { lat: Number(e.latLng.lat()), lng: Number(e.latLng.lng()) };
    //console.log(location);
    setBirdList(location);
    return false
  }

  //console.log(birds);

  let birdKey = 0;

  const onSelect = (bird: IBirdObserver) => {
    setSelected(bird);
  }

  return (
    <>
      <GoogleMap zoom={10}
        options={{
          gestureHandling: "greedy",
          disableDoubleClickZoom: false,
          disableDefaultUI: true,
          streetViewControl: true,
          zoomControl: true,
        }}
        center={center}
        onDblClick={(e) => placeMarker(e)}
        mapContainerClassName="map-container">
        {
          birds?.map(bird => {
            // //console.log(bird);
            let birdLoc = { lat: bird.lat, lng: bird.lng };

            return (
              <Marker title={bird.name} position={birdLoc} key={birdKey++} onClick={() => onSelect(bird)}>

              </Marker>
            )
          })
        }

        {
          selected.location &&
          (
            <InfoWindow
              position={{ lat: Number(selected.lat), lng: Number(selected.lng) }}
              // clickable={true}
              onCloseClick={() => setSelected(birdClear)}
              options={{
                pixelOffset: new window.google.maps.Size(
                  0, -35
                )
              }}
            >
              <div id="birdInfo">
                <strong><a href={selected.birdSpeciesUrl} target="_blank" >{selected.name}</a></strong>
                <hr />
                {selected.numberSpotted > 1 ? `${selected.numberSpotted} birds spotted at  ${selected.location}` :
                  `${selected.numberSpotted} bird spotted at  ${selected.location}`}
              </div>
            </InfoWindow>
          )
        }
      </GoogleMap> 
      <br/>
        <div id="weatherLanding">
          <WeatherInfo location={location}  langTypeIdx={langTypeIdx} />
        </div>
    </>
  )
}

export default SpottingMap


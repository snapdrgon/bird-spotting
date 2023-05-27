import { useLoadScript } from "@react-google-maps/api";
import SpottingMap from "./SpottingMap";

export default function BirdMapComponent() {
 
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
        });   

        if (!isLoaded) {
            return <div>Loading..</div>
          }
          else 
          {
            return <div><SpottingMap/></div>
          }
};

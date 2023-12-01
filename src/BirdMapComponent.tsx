import { useLoadScript } from "@react-google-maps/api";
import SpottingMap from "./SpottingMap";
import { LangTypeIndex } from "./models/LangTypeIndex";
import { useEffect, useState } from "react";

export default function BirdMapComponent(props: { langTypeIdx: number; }) {
 
    // const [langTypeIdx, setlangTypeIdx] = useState(props.langTypeIdx);

    let langTypeIdx = props.langTypeIdx;
    
    useEffect(() => {
      // setlangTypeIdx(props.langTypeIdx);
  }, [props.langTypeIdx]);

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
        });   

        if (!isLoaded) {
            return <div>Loading..</div>
          }
          else 
          {
            return <div><SpottingMap  langTypeIdx={langTypeIdx} /></div>
          }
};

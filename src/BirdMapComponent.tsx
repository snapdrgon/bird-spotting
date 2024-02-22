import { useLoadScript } from "@react-google-maps/api";
import SpottingMap from "./SpottingMap";
import { LangTypeIndex } from "./models/LangTypeIndex";
import { useEffect, useState } from "react";
import SpottingMapen from "./SpottingMapen";
import SpottingMapesp from "./SpottingMapesp";

export default function BirdMapComponent(props: { langTypeIdx: number; }) {

  // const [langTypeIdx, setlangTypeIdx] = useState(props.langTypeIdx);

  let langTypeIdx = props.langTypeIdx;

  useEffect(() => {
    // setlangTypeIdx(props.langTypeIdx);
  }, [props.langTypeIdx]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
  });

  if (!isLoaded) {
    return <div>Loading..</div>
  }
  else {
       switch (langTypeIdx) {
      case 0:
        return <div><SpottingMapen langTypeIdx={langTypeIdx} /></div>;
      case 1:
        return <div><SpottingMapesp langTypeIdx={langTypeIdx} /></div>;
      case 2:
        return<div><SpottingMap langTypeIdx={langTypeIdx} /></div>;
    }
  }
};

import './App.css'
import BirdComponent from './BirdComponent'
import MenuComponent from './MenuComponent'
import { LanguageType } from './enumerators/Language';

function App() {

//   const getLangIndex = (): number => {
//     let langIndex = 0;
//     let languageType = localStorage.getItem("languageType");
//     if (languageType == null) {
//         //set default english
//         localStorage.setItem('languageType', LanguageType.English);
//         languageType = localStorage.getItem("languageType");
//     }
//     switch (languageType) {
//         case LanguageType.English:
//             langIndex = 0;
//             break;
//         case LanguageType.Español:
//             langIndex = 1;
//             break;
//         case LanguageType.Français:
//             langIndex = 2;
//             break;
//     }
//     return langIndex;
// }

// let langIndex = getLangIndex();

  return (
    <>
      <MenuComponent />
      {/* <BirdComponent langTypeIdx={langIndex} /> */}
    </>
  )
}

export default App

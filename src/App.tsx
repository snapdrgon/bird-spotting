import './App.css'
import { HelmetProvider } from 'react-helmet-async';
import MenuComponent from './MenuComponent'
import { LanguageType } from './enumerators/Language';

function App() {


  return (
    <>
      <HelmetProvider>
        <MenuComponent />
      </HelmetProvider>
    </>
  )
}

export default App

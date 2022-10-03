import './App.css';
import {useState} from "react";
import {IntlProvider} from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Footer from './components/Footer'
import Content from "./components/Content";
import Header from "./components/Header";

const App = () => {

  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  const handleChange = (e) => {
    setCurrentLocale(e.target.value);
    localStorage.setItem("locale", e.target.value);
  };

  function getInitialLocal() {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.ENGLISH;
  }

  return (
    <IntlProvider
        messages={messages[currentLocale]}
        locale={currentLocale}
        defaultLocale={LOCALES.ENGLISH}
    >
      <div>
        <Header currentLocale={currentLocale} handleChange={handleChange}/>
        <Content/>
        <Footer/>
      </div>
    </IntlProvider>
  );
}

export default App;

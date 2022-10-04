import './App.css';
import {useState} from "react";
import {IntlProvider} from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Footer from './components/Footer'
import Content from "./components/Content";
import Header from "./components/Header";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Orders from "./components/orders";
import MyAccount from "./components/my_account";

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
        <BrowserRouter>
          <Header currentLocale={currentLocale} handleChange={handleChange}/>
          <Routes >
            <Route path="/" element={<Content />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/my_account" element={<MyAccount />} ></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </IntlProvider>
  );
}

export default App;

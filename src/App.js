import './App.css';
import {useState} from "react";
import {IntlProvider} from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Footer from './components/Footer'
import Content from "./components/Content";
import ApplicationBar from "./components/ApplicationBar";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Orders from "./components/orders";
import MyAccount from "./components/my_account";
import {createTheme, ThemeProvider} from "@mui/material";

const App = () => {

  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  const handleLocaleChange = (e) => {
    setCurrentLocale(e.target.value);
    localStorage.setItem("locale", e.target.value);
  };

  function getInitialLocal() {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.ENGLISH;
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffe082',
        light: '#ffffb3',
        dark: '#caae53',
      },
      secondary: {
        main: '#aed581',
        light: '#e1ffb1',
        dark: '#7da453',
      },
    },
  });

  return (
    <IntlProvider
        messages={messages[currentLocale]}
        locale={currentLocale}
        defaultLocale={LOCALES.ENGLISH}
    >
      <ThemeProvider theme={theme}>
        <div>
          <BrowserRouter>
            <ApplicationBar />
            <Routes >
              <Route path="/" element={<Content />}></Route>
              <Route path="/orders" element={<Orders />}></Route>
              <Route path="/my_account" element={<MyAccount />} ></Route>
            </Routes>
            <Footer currentLocale={currentLocale} handleChange={handleLocaleChange} />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;

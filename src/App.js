import './App.css';
import {useState} from "react";
import {IntlProvider} from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Footer from './components/Footer'
import Content from "./components/Content";
import ApplicationBar from "./components/top/ApplicationBar";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Orders from "./components/orders";
import MyAccount from "./components/my_account";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import ThemeOptions from "./theme/theme";
import {AuthProvider} from "./context/AuthContext";
import Signup from "./components/users/signup";
import Login from "./components/users/login";

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

  const theme = createTheme(ThemeOptions);

  return (
    <IntlProvider
        messages={messages[currentLocale]}
        locale={currentLocale}
        defaultLocale={LOCALES.ENGLISH}
    >
      <ThemeProvider theme={theme}>
        <AuthProvider >
          <BrowserRouter>
            <Box >
              <ApplicationBar />
              <Routes >
                <Route path="/" element={<Content />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/my_account" element={<MyAccount />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Routes>
              <Footer currentLocale={currentLocale} handleChange={handleLocaleChange} />
            </Box>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;

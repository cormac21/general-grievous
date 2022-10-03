import './App.css';
import {IntlProvider} from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Footer from './components/Footer'
import Content from "./components/Content";
import Header from "./components/Header";

const App = () => {
  const locale = LOCALES.PORTUGUESE;

  return (
    <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale={LOCALES.ENGLISH}
    >
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </IntlProvider>
  );
}

export default App;

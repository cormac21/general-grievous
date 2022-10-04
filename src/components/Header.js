import {FormattedMessage} from "react-intl";
import {LOCALES} from "../i18n/locales";
import {Link} from "react-router-dom";

const Header = ( props ) => {
    const menu = [
        {
            key: "orders",
            title: "Orders",
            path: "/orders",
        },
        {
            key: "my_account",
            title: "MyAccount",
            path: "/my_account",
        },
    ];

    const languages = [
        { name: "English", code: LOCALES.ENGLISH},
        { name: "Português", code: LOCALES.PORTUGUESE},
        { name: "Español", code: LOCALES.SPANISH},
    ]

    return (
      <header>
        <div className="container header_content">
          <div className="brand">
            <Link to="/" >
              Timão e Pumba
            </Link>
          </div>
            <nav>
              <ul>
                {menu.map(({ title, path, key }) => (
                  <li key={title}>
                    <Link to={path} >
                      <FormattedMessage id={key} />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="spacer"></div>
            <div className="switcher">
              <FormattedMessage id="languages" />
              <select onChange={props.handleChange} value={props.currentLocale}>
                {languages.map(({ name, code }) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
              </select>
            </div>
        </div>
      </header>
    );
};

export default Header;
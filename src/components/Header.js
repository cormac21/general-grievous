import {FormattedMessage} from "react-intl";
import {LOCALES} from "../i18n/locales";

const Header = ( props ) => {
    const menu = [
        {
            key: "about_project",
            title: "About the project",
            path: "#",
        },
        {
            key: "contact_us",
            title: "Contact us",
            path: "#",
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
          <div className="brand">Timão e Pumba</div>
            <nav>
              <ul>
                {menu.map(({ title, path, key }) => (
                  <li key={title}>
                    <a href={path}>
                      <FormattedMessage id={key} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="spacer"></div>
            <div className="switcher">
              Languages{" "}
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
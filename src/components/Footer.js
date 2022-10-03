import { useState } from "react";
import {FormattedMessage} from "react-intl";

const Footer = () => {
    const [count, setCount] = useState(0);
    const onChange = () => {
        setCount((prevState) => prevState + 1);
    };

    return (
        <div className="container mt">
            <p>Please click the button below</p>
            <button onClick={onChange}>click here</button>
            <p>
                <FormattedMessage id="click_count" values={{ count: count }} />
            </p>
        </div>
    );
};

export default Footer;
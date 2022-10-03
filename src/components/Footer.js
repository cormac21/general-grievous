import { useState } from "react";

const Footer = () => {
    const [count, setCount] = useState(0);
    const onChange = () => {
        setCount((prevState) => prevState + 1);
    };

    return (
        <div className="container mt">
            {/* Footer content here */}
            <p>Please click the button below</p>
            <button onClick={onChange}>click here</button>
            <p>You clicked {count} times</p>
        </div>
    );
};

export default Footer;
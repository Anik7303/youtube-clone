import React from "react";

import "./Header.css";
import HeaderInput from "./HeaderInput/HeaderInput";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderIcons from "./HeaderIcons/HeaderIcons";

const Header = (props) => {
    return (
        <header className="header">
            <HeaderLeft />
            <HeaderInput />
            <HeaderIcons />
        </header>
    );
};

export default Header;

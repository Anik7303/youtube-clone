import React from "react";
import { Link } from "react-router-dom";

import "./HeaderLeft.css";
import MenuIcon from "@material-ui/icons/Menu";

const HeaderLeft = (props) => {
    return (
        <section className="header__left">
            <MenuIcon />
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                    alt="Youtube Icon"
                />
            </Link>
        </section>
    );
};

export default HeaderLeft;

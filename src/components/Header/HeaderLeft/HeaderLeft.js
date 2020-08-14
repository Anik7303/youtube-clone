import React from "react";
import { Link } from "react-router-dom";

// css stylesheets
import "./HeaderLeft.css";

// images
import Logo from "../../../assets/images/youtube.svg";

// material-ui icons
import MenuIcon from "@material-ui/icons/Menu";

const HeaderLeft = (props) => {
    return (
        <section className="header__left">
            <MenuIcon className="header__menu" />
            <Link className="header__logo" to="/">
                <img
                    className="header__logo-icon"
                    src={Logo}
                    alt="Youtube Icon"
                />
                <span className="header__logo-text">YouTube</span>
            </Link>
        </section>
    );
};

export default HeaderLeft;

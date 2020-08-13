import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./HeaderInput.css";
import SearchIcon from "@material-ui/icons/Search";

const HeaderInput = (props) => {
    const [searchInput, setSearchInput] = useState("");
    const searchInputhandler = (event) => {
        setSearchInput(event.target.value);
    };
    return (
        <section className="header__input">
            <input
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={searchInputhandler}
            />
            <Link
                className="header__input--action"
                to={`/search/${searchInput}`}
            >
                <SearchIcon fontSize="small" />
            </Link>
            {/* <div className="header__input--action">
                <SearchIcon fontSize="small" />
            </div> */}
        </section>
    );
};

export default HeaderInput;

import React from "react";
import { NavLink } from "react-router-dom";

import "./SidebarItem.css";

const SidebarItem = (props) => {
    const Icon = props.icon;
    return (
        <li>
            <NavLink exact to={props.link} className={"sidebar__item"}>
                <span className="sidebar__item-icon">
                    {Icon ? <Icon /> : ""}
                </span>
                <span className="sidebar__item-title">{props.title}</span>
            </NavLink>
        </li>
    );
};

export default SidebarItem;

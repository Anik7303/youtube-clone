import React from "react";

import "./SidebarItem.css";

const SidebarItem = (props) => {
    const Icon = props.icon;
    const aditionalClasses = props.classes || "";
    const itemClasses = ["sidebar__item", ...aditionalClasses.split(" ")];
    return (
        <li className={itemClasses.join(" ")}>
            <span className="sidebar__item-icon">{Icon ? <Icon /> : ""}</span>
            <span className="sidebar__item-title">{props.title}</span>
        </li>
    );
};

export default SidebarItem;

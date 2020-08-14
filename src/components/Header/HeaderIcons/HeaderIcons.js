import React from "react";

import "./HeaderIcons.css";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

const HeaderIcons = (props) => {
    return (
        <section className="header__icons">
            <VideoCallIcon className="header__icon" />
            <AppsIcon className="header__icon" />
            <NotificationsIcon className="header__icon" />
            <Avatar src="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo" />
        </section>
    );
};

export default HeaderIcons;

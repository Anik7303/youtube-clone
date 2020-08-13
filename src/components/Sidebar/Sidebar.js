import React from "react";

import "./Sidebar.css";
import SidebarItem from "./SidebarItem/SidebarItem";

// material icons
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import FeedbackIcon from "@material-ui/icons/Feedback";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

const Sidebar = (props) => {
    const list = [
        {
            name: "",
            list: [
                { title: "Home", icon: HomeIcon },
                { title: "Trending", icon: WhatshotIcon },
                { title: "Subscription", icon: SubscriptionsIcon },
            ],
            limit: -1,
        },
        {
            name: "",
            list: [
                { title: "Library", icon: VideoLibraryIcon },
                { title: "History", icon: HistoryIcon },
                { title: "Your Videos", icon: OndemandVideoIcon },
                { title: "Watch Later", icon: WatchLaterIcon },
                { title: "Liked Videos", icon: ThumbUpIcon },
                { title: "Show more", icon: ExpandMoreOutlinedIcon },
            ],
            limit: 5,
        },
        {
            name: "Subscriptions",
            list: [],
            limit: 7,
        },
        {
            name: "More from youtube",
            list: [
                { title: "Gaming", icon: VideogameAssetIcon },
                { title: "Live", icon: HomeIcon },
                { title: "Fashion & Beauty", icon: HomeIcon },
                { title: "Learing", icon: HomeIcon },
            ],
            limit: -1,
        },
        {
            name: "",
            list: [
                { title: "Settings", icon: SettingsIcon },
                { title: "Report history", icon: HistoryIcon },
                { title: "Help", icon: HelpIcon },
                { title: "Send feedback", icon: FeedbackIcon },
            ],
            limit: -1,
        },
    ];
    const sidebarItems = list.map((item, index) => {
        return (
            <React.Fragment key={index}>
                {item.name && <span className="list-title">{item.name}</span>}
                <ul className="sidebar__list">
                    {item.list.map((listItem, index) => (
                        <SidebarItem
                            key={index}
                            icon={listItem.icon}
                            title={listItem.title}
                        />
                    ))}
                </ul>
                <span className="horizontal-line"></span>
            </React.Fragment>
        );
    });
    return <section className="sidebar">{sidebarItems}</section>;
};

export default Sidebar;

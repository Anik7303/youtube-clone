import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ChannelItem.css";
import VerifiedIcon from "@material-ui/icons/CheckCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

const ChannelItem = (props) => {
    const [notificationState, setNotificationState] = useState(false);
    const [subscribedState, setSubscribedState] = useState(props.subscribed);

    const notificationStateHandler = (event) => {
        event.preventDefault();
        setNotificationState(!notificationState);
    };
    const subscriptionHandler = (event) => {
        event.preventDefault();
        setSubscribedState(!subscribedState);
    };

    const subscribeBtnClasses = ["btn", "channel__subscribe"];
    if (subscribedState) {
        subscribeBtnClasses.push("channel__subscribe--subscribed");
    }

    return (
        <Link className="channel-section" to={`/channel/${props.id}`}>
            <div className="channel__image">
                <img src={props.imageUrl} alt={props.name} />
            </div>
            <div className="channel__info">
                <h2 className="channel__title">
                    {props.name}
                    {props.verified && (
                        <VerifiedIcon className="icon" fontSize="small" />
                    )}
                </h2>
                <p className="channel__stats">
                    {props.subscriptions} &#8226; {props.videos}
                </p>
                <p className="channel__description">{props.description}</p>
            </div>
            <div className="channel__actions">
                <button
                    className={subscribeBtnClasses.join(" ")}
                    onClick={subscriptionHandler}
                >
                    Subscribe
                </button>
                {subscribedState && (
                    <div
                        className="channel__notification-icon"
                        onClick={notificationStateHandler}
                    >
                        {notificationState ? (
                            <NotificationsActiveIcon className="icon" />
                        ) : (
                            <NotificationsIcon className="icon" />
                        )}
                    </div>
                )}
            </div>
        </Link>
    );
};

export default ChannelItem;

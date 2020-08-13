import React from "react";

import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

const VideoCard = (props) => {
    return (
        <div className="video-card">
            <div className="video-card__thumbnail">
                <img src={props.thumbnail} alt={props.title} />
            </div>
            <div className="video-card__info">
                <div className="video-card__avatar">
                    <Avatar src={props.authorImage} alt={props.author} />
                </div>
                <div className="video-card__text">
                    <h4>{props.title}</h4>
                    <p>{props.author}</p>
                    <p>
                        {props.views} &#8226; {props.timestamp}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;

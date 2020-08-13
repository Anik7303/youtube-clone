import React from "react";

// css stylesheets
import "./VideoItem.css";

const VideoItem = (props) => {
    return (
        <div className="search-result__video">
            <div className="search-result__video-thumbnail">
                <img src={props.thumbnail} alt={props.title} />
            </div>
            <div className="search-result__video-info"></div>
        </div>
    );
};

export default VideoItem;

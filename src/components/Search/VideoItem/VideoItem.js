import React from "react";
import { Link } from "react-router-dom";

// css stylesheets
import "./VideoItem.css";

// material-ui icons
import VerifiedIcon from "@material-ui/icons/CheckCircle";

const VideoItem = (props) => {
    return (
        <li>
            <Link className="search-result__video" to={props.url}>
                <div className="search-result__video-thumbnail">
                    <img src={props.thumbnail} alt={props.title} />
                </div>
                <div className="search-result__video-info">
                    <h2 className="search-result__video-title">
                        {props.title}
                    </h2>
                    <div>
                        <span className="search-result__video-author">
                            {props.author}{" "}
                            {props.verified && (
                                <VerifiedIcon
                                    className="icon"
                                    fontSize="small"
                                />
                            )}{" "}
                            {}
                        </span>
                        <span className="search-result__video-stats">
                            {props.views} &#8226; {props.timestamp}
                        </span>
                    </div>
                    <div className="search-result__video-description">
                        {props.description}
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default VideoItem;

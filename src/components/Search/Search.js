import React from "react";

// css style sheets
import "./Search.css";

// components
import ChannelItem from "./ChannelItem/ChannelItem";
import VideoItem from "./VideoItem/VideoItem";

// material icons
import TuneIcon from "@material-ui/icons/Tune";

const Search = (props) => {
    return (
        <section className="search-section">
            <div>
                <section className="search-section__title">
                    <TuneIcon />
                    <h2>Filter</h2>
                </section>
                <hr />
                <section className="search-section__channels">
                    <ChannelItem
                        name="Clever Programmer"
                        imageUrl="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
                        subscriptions="712 subscribers"
                        videos="395 videos"
                        description="You can find awesome programming lessongs here! Also, expect programming tips and tricks that will take your coding skills to the ..."
                        verified
                        subscribed={false}
                    />
                </section>
                <hr />
                <section className="search-section__videos">
                    <h2 className="search-section__videos-title">
                        Related to your search
                    </h2>
                    <VideoItem
                        title
                        thumbnail
                        author
                        verified
                        views
                        timestamp
                        description
                    />
                </section>
            </div>
        </section>
    );
};

export default Search;

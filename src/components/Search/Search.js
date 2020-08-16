import React from "react";

// css stylesheets
import "./Search.css";

// components
import ChannelItem from "./ChannelItem/ChannelItem";
import VideoItem from "./VideoItem/VideoItem";

// material icons
import TuneIcon from "@material-ui/icons/Tune";

// helper functions
import { getVideoObject } from "../../share/utils.js";

const Search = (props) => {
    const videos = [
        getVideoObject(
            "1",
            "Top 7 Developer Tools in 2020 - Every Programmer Should Know",
            "https://i.imgur.com/lpoxQIs.png",
            "FREE JavaScript Training ...",
            "1 day ago",
            "2k views",
            "Clever Programmer",
            true
        ),
        getVideoObject(
            "2",
            "FAST AND FURIOUS 9 Trailer (4k ULTRA HD) NEW 2020",
            "https://i.imgur.com/IqcYa5x.png",
            "",
            "6 months ago",
            "10M views",
            "FlimSpot Trailer",
            true
        ),
        getVideoObject(
            "3",
            "Kuyenda | AMV | Anime Mix",
            "https://i.imgur.com/ICFjJ95.png",
            "",
            "3 months ago",
            "82k views",
            "Jasi Amvs",
            true
        ),
        getVideoObject(
            "4",
            "How To Create A Github Profile README (NEW) // Github Tutorial: Add...",
            "https://i.imgur.com/aVrb0TK.png",
            "",
            "10k views",
            "4 weeks ago",
            "Program With Erik",
            true
        ),
        getVideoObject(
            "5",
            "PARAMOUNT｜新海誠作品 Makoto Shinkai Films",
            "https://i.imgur.com/50Hile1.png",
            "",
            "546k views",
            "8 months ago",
            "なかじまNakajima",
            true
        ),
        getVideoObject(
            "6",
            "Gryffin - Cry (Lyrics) feat. John Martin",
            "https://i.imgur.com/5kfalgY.png",
            "",
            "WaveMusic",
            "340k views",
            "1 week ago",
            true
        ),
    ];

    const videoResults = videos.map((item, index) => {
        return <VideoItem key={index} {...item} />;
    });

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
                        id={"channel-01"}
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
                    <ul className="search-section__video-list">
                        {videoResults}
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default Search;

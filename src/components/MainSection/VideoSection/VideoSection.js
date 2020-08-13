import React from "react";

import "./VideoSection.css";
import VideoCard from "./VideoCard/VideoCard";

const VideoSection = (props) => {
    return (
        <section className="video-section">
            <h2 className="video-section__category-title">{props.title}</h2>
            <p className="video-section__category-sub-title">
                {props.subTitle}
            </p>
            <ul className="video-section__video-list">
                <VideoCard
                    title="Top 7 Developer Tools in 2020 - Every Programmer Should Know"
                    thumbnail="https://i.imgur.com/lpoxQIs.png"
                    author="Clever Programmer"
                    authorImage="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s100-c-k-c0xffffffff-no-rj-mo"
                    views="2k views"
                    timestamp="1 day ago"
                />
                <VideoCard
                    title="FAST AND FURIOUS 9 Trailer (4k ULTRA HD) NEW 2020"
                    thumbnail="https://i.imgur.com/IqcYa5x.png"
                    author="FlimSpot Trailer"
                    authorImage="https://yt3.ggpht.com/a/AATXAJz8wq-hhjofGXjKxROEC0u_IQOqkn2HiHDygNFfRw=s100-c-k-c0xffffffff-no-rj-mo"
                    views="10M views"
                    timestamp="6 months ago"
                />
                <VideoCard
                    title="Kuyenda | AMV | Anime Mix"
                    thumbnail="https://i.imgur.com/ICFjJ95.png"
                    author="Jasi Amvs"
                    authorImage="https://yt3.ggpht.com/a/AATXAJxC4PfFocbyAO0ZrjDekmwfwoGC-HNdIn_mD1g7SQ=s100-c-k-c0xffffffff-no-rj-mo"
                    views="82k views"
                    timestamp="3 months ago"
                />
                <VideoCard
                    title="How To Create A Github Profile README (NEW) // Github Tutorial: Add..."
                    thumbnail="https://i.imgur.com/aVrb0TK.png"
                    author="Program With Erik"
                    authorImage="https://yt3.ggpht.com/a/AATXAJxSznGC95KCVg_C-pMW1mVBMWYC7Tt1oLHJb-HU=s100-c-k-c0xffffffff-no-rj-mo"
                    views="10k views"
                    timestamp="4 weeks ago"
                />
                <VideoCard
                    title="PARAMOUNT｜新海誠作品 Makoto Shinkai Films"
                    thumbnail="https://i.imgur.com/50Hile1.png"
                    author="なかじまNakajima"
                    authorImage="https://yt3.ggpht.com/a/AATXAJzTaopJNWuzIzgcZG3VIrkqPSzz1ngDvQy-oPIaHw=s100-c-k-c0xffffffff-no-rj-mo"
                    views="546k views"
                    timestamp="8 months ago"
                />
                <VideoCard
                    title="Gryffin - Cry (Lyrics) feat. John Martin"
                    thumbnail="https://i.imgur.com/5kfalgY.png"
                    author="WaveMusic"
                    authorImage="https://yt3.ggpht.com/a/AATXAJy9VZlpJl8Muz2J4o21Q1ILzgXUH5etf1y52HC-vg=s100-c-k-c0xffffffff-no-rj-mo"
                    views="340k views"
                    timestamp="1 week ago"
                />
                <VideoCard
                    title="GAMBIT - Play For Keeps (2020) Unofficial"
                    thumbnail="https://i.imgur.com/Yb3iuT1.png"
                    author="Nick Bateman"
                    authorImage="https://yt3.ggpht.com/a/AATXAJzjMJ_Q1t3QR6nki90WGJ15A1dt-ftmWdlTCx2iTQ=s176-c-k-c0x00ffffff-no-rj-mo"
                    views="2.4M views"
                    timestamp="1 month ago"
                />
                <VideoCard
                    title="Data Structures Easy to Advanced Course - Full Tutorial from a Google..."
                    thumbnail="https://i.imgur.com/alRXPz1.png"
                    author="freeCodeCamp.org"
                    authorImage="https://yt3.ggpht.com/a/AATXAJwFt03RAznOsPwlfo5c1kW1rp-1o3Xgpw9MNreQMQ=s100-c-k-c0xffffffff-no-rj-mo"
                    views="1.4M views"
                    timestamp="10 months ago"
                />
            </ul>
        </section>
    );
};

export default VideoSection;

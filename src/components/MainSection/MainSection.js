import React from "react";

import "./MainSection.css";
import VideoSection from "./VideoSection/VideoSection";

const MainSection = (props) => {
    return (
        <section className="main-section">
            <VideoSection title="Recommended" />
        </section>
    );
};

export default MainSection;

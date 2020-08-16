import React from "react";

// css stylesheets
import "./MainSection.css";

// components
import VideoSection from "./VideoSection/VideoSection";

const MainSection = (props) => {
    return (
        <section className="main-section">
            <VideoSection title="Recommended" />
        </section>
    );
};

export default MainSection;

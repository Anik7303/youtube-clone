import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// components
import Layout from "../Layout/Layout";

function App() {
    return (
        <div className="app">
            <Router basename="/youtube-clone/">
                <Layout />
            </Router>
        </div>
    );
}

export default App;

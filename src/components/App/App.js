import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import Layout from "../Layout/Layout";

function App() {
    return (
        <Router basename="/">
            <div className="app">
                <Layout />
            </div>
        </Router>
    );
}

export default App;

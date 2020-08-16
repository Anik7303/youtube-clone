import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// css stylesheets
import "./Layout.css";

// components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MainSection from "../MainSection/MainSection";
import Search from "../Search/Search";

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <main className="main">
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={MainSection} />
                    <Route
                        exact
                        path="/search/:searchInput"
                        render={(props) => <Search {...props} />}
                    />
                    <Route
                        exact
                        path="/result"
                        render={(props) => <Search {...props} />}
                    />
                    <Route exact path="/video/:id" component={Search} />
                    {/* <Redirect to="/" /> */}
                </Switch>
            </main>
        </Fragment>
    );
};

export default Layout;

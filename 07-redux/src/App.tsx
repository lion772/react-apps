import React, { Fragment, useState } from "react";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import UserProfile from "./components/UserProfile/UserProfile";
import { authActions } from "./store/store";
import { useSelector, useDispatch } from "react-redux";

function App() {
    const isAuthenticated = useSelector(
        (state: any) => state.auth.isAuthenticated
    );

    return (
        <Fragment>
            <Header />
            {isAuthenticated && <UserProfile />}
            {!isAuthenticated && <Auth />}

            <Counter />
        </Fragment>
    );
}

export default App;

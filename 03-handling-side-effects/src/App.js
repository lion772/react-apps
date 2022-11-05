import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <>
            <MainHeader />
            <main>
                {!isLoggedIn && <Login />}
                {isLoggedIn && <Home />}
            </main>
        </>
    );
}

export default App;

/* 
1) useEffect hook without mentioning any dependency array like.. useEffect(someCallbackFuction); runs for every render of the functional component in which its included..
2) useEffect hook with an empty dependency array like this..  useEffect(callbackFunc , [] ) is executed only for the the initial render of the the functional component. And then it will not run in the further renders of the same functional Component..
3) useEffect hook with some dependencies inside the dependency array like this.. useEffect(callbackFunc , [dependency] ); will run for the initial render as well as when the render happen due to change in dependencies mentioned in the dependency array...
*/

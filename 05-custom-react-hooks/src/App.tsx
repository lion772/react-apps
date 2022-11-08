import React from "react";
import "./App.css";
import ForwardCounter from "./components/ForwardCounter/ForwardCounter";
import BackwardCounter from "./components/BackwardCounter/BackwardCounter";

function App() {
    return (
        <React.Fragment>
            <ForwardCounter />
            <BackwardCounter />
        </React.Fragment>
    );
}

export default App;

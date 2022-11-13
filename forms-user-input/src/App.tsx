import React from "react";
import "./App.css";
import EveryKeyStrokeForm from "./components/EveryKeyStrokeForm/EveryKeyStrokeForm";

function App() {
    return (
        <div className="app">
            {/* <BasicForm /> */}
            {/* <LoseFocusForm /> */}
            <EveryKeyStrokeForm />
        </div>
    );
}

export default App;

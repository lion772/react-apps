import React from "react";
import "./App.css";
import BasicForm from "./components/BasicForm/BasicForm";
import EveryKeyStrokeForm from "./components/EveryKeyStrokeForm/EveryKeyStrokeForm";
import SimpleInput from "./components/SimpleInput/SimpleInput";

function App() {
    return (
        <div className="app">
            <BasicForm />
            {/* <LoseFocusForm /> */}
            {/* <EveryKeyStrokeForm /> */}
            {/* <SimpleInput /> */}
        </div>
    );
}

export default App;

import React from "react";
import "./App.css";
import BasicForm from "./components/BasicForm/BasicForm";
import LoseFocusForm from "./components/LoseFocusForm/LoseFocusForm";
import SimpleInput from "./components/SimpleInput/SimpleInput";

function App() {
    return (
        <div className="app">
            {/* <BasicForm /> */}
            <LoseFocusForm />
        </div>
    );
}

export default App;

import { useState } from "react";
import Output from "./Output";
const Greeting = () => {
    const [changeText, setchangeText] = useState(false);
    return (
        <>
            <h2>Hello World</h2>
            {!changeText && <Output>It's good to see you</Output>}
            {changeText && <Output>Changed!</Output>}
            <button onClick={() => setchangeText(true)}></button>
        </>
    );
};

export default Greeting;

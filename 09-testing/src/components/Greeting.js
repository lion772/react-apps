import { useState } from "react";
const Greeting = () => {
    const [changeText, setchangeText] = useState(false);
    return (
        <>
            <h2>Hello World</h2>
            {!changeText && <p>It's good to see you</p>}
            {changeText && <p>Changed!</p>}
            <button onClick={() => setchangeText(true)}></button>
        </>
    );
};

export default Greeting;

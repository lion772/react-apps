import React, { FC, useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./ForwardCounter.module.css";

interface ForwardCounterProps {}

const ForwardCounter: FC<ForwardCounterProps> = () => {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <Card>{counter}</Card>;
};

export default ForwardCounter;

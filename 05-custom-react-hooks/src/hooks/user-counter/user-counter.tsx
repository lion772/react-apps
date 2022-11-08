import React, { FC, useEffect, useState } from "react";
import styles from "./user-counter.module.css";

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;
};

export default useCounter;

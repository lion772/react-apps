import React, { FC } from "react";
import { useSelector, useStore } from "react-redux";
import styles from "./Counter.module.css";
type State = {
    counter: number;
};
interface CounterProps {}

const Counter: FC<CounterProps> = () => {
    //useSelector automatically setup a subscripton for you to get the latest state whenever store is updated
    const counter = useSelector((state: State) => state.counter);
    const { dispatch } = useStore();
    const toggleCounterHandler = () => {
        dispatch({ type: "increment" });
    };
    return (
        <main className={styles.counter}>
            <h1>Redux Counter</h1>
            <div className={styles.value}>{counter}</div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

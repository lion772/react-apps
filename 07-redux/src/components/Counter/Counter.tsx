import React, { Component, Dispatch, FC } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import styles from "./Counter.module.css";

type State = {
    counter: number;
};

interface CounterProps {}

const Counter: FC<CounterProps> = () => {
    //useSelector automatically setup a subscripton for you to get the latest state whenever store is updated
    const counter = useSelector((state: State) => state.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({ type: "increment", counter: 1 });
    };
    const incrementByFiveHandler = () => {
        dispatch({ type: "increment", counter: 5 });
    };
    const decrementHandler = () => {
        dispatch({ type: "decrement", counter: 1 });
    };

    const toggleCounterHandler = () => {};

    return (
        <main className={styles.counter}>
            <h1>Redux Counter</h1>
            <div className={styles.value}>{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={incrementByFiveHandler}>
                    Increment by five
                </button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

//Class based component with redux
/* class CounterClass extends Component {
    incrementHandler = () => {
        this.props.increment();
    };
    decrementHandler = () => {
        this.props.decrement();
    };

    toggleCounterHandler = () => {};

    render() {
        return (
            <main className={styles.counter}>
                <h1>Redux Counter</h1>
                <div className={styles.value}>{this.props.counter}</div>
                <div>
                    <button onClick={this.incrementHandler.bind(this)}>
                        Increment
                    </button>
                    <button onClick={this.decrementHandler.bind(this)}>
                        Decrement
                    </button>
                </div>
                <button onClick={this.toggleCounterHandler}>
                    Toggle Counter
                </button>
            </main>
        );
    }
}


const mapStateToProps = (state: any) => {
    return {
        counter: state.counter,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        increment: () => dispatch({ type: "increment" }),
        decrement: () => dispatch({ type: "decrement" }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass); */

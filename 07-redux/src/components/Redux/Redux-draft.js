const redux = require("redux");

/* Then the reducer function is not the same as useReducer. For better understanding, I have used the next lecture's reducer function. It is the function that changes the state which receives the state and the action that triggered it. We set the default value by state = { counter: 0 } It's just javascript. The function should be pure which means the same inputs give the same output every time, this is done by using things that are provided to the function here which are action and state. So the reducer changes state according to the action which I will talk about next, but till then bare with me. We use the type property of the action to decrease counter on decrement and increase on increment else (when run the first time) change nothing. */
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
        };
    }
    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
        };
    }
    return state;
};

/* So first there is redux storage the place where we store all our state. */
const store = redux.createStore(counterReducer);

/* Next is the action which is called by using the dispatch method provided by store const(the const where we stored the redux storage) this method receives an object with a property type. The action triggers the reducer function which changes the state. */
store.dispatch({ type: "increment" });
console.log(store.getState())
//store.dispatch({ type: "decrement" });
//console.log(store.getState());


/* Finally the subscriber or the state consumer. It is a function here and can also be a component that gets the latest state by the getState method of store const(the const where we stored the redux storage) */
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

/* we tell the store that this function is a subscriber/state consumer by store.subscribe(counterSubscriber); and here we pass the pointer to the subscriber, we give the subscriber's */
store.subscribe(counterSubscriber);

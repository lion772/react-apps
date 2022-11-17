import { createStore } from "redux";

type State = {
    counter: number;
};
type Action = {
    type: string;
    counter: number;
};

const counterReducer = (state: State = { counter: 0 }, action: Action) => {
    if (action.type === "increment") {
        return { counter: state.counter + action.counter };
    }
    if (action.type === "decrement") {
        return { counter: state.counter - action.counter };
    }
    return state;
};

//Create reduce store
const store = createStore(counterReducer);

export default store;

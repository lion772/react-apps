import { createStore } from "redux";

type State = {
    counter: number;
    isHidden: boolean;
};
type Action = {
    type: string;
    counter: number;
};

const initialState = { counter: 0, isHidden: false };

const counterReducer = (state: State = initialState, action: Action) => {
    if (action.type === "increment") {
        return { ...state, counter: state.counter + action.counter };
    }
    if (action.type === "decrement") {
        return { ...state, counter: state.counter - action.counter };
    }
    if (action.type === "hide") {
        return { ...state, isHidden: !state.isHidden };
    }
    return state;
};

//Create reduce store
const store = createStore(counterReducer);

export default store;

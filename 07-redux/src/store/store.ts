import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const HIDE = "hide";

export type State = {
    counter: number;
    isHidden: boolean;
};
export type Action = {
    type: string;
    payload: number;
};

const initialState = { counter: 0, isHidden: false };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state: State, action: Action) {
            state.counter = state.counter + action.payload; //It'll automatically clone the existing state and create a new state object in a immutable way
        },
        decrement(state: State, action: Action) {
            state.counter = state.counter - action.payload;
        },
        hide(state) {
            state.isHidden = !state.isHidden;
        },
    },
});

//Old way
/* const counterReducer = (state: State = initialState, action: Action) => {
    if (action.type === INCREMENT) {
        return { ...state, counter: state.counter + action.counter };
    }
    if (action.type === DECREMENT) {
        return { ...state, counter: state.counter - action.counter };
    }
    if (action.type === HIDE) {
        return { ...state, isHidden: !state.isHidden };
    }
    return state;
}; */

export const counterActions = counterSlice.actions;
export const counterState = counterSlice.getInitialState;

//Create reduce store
const store = configureStore({
    reducer: counterSlice.reducer,
});

export default store;

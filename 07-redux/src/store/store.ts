import { createSlice, configureStore } from "@reduxjs/toolkit";

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const HIDE = "hide";

export type State = {
    counter: number;
    isHidden: boolean;
};

const initialCounterState = { counter: 0, isHidden: false };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload; //It'll automatically clone the existing state and create a new state object in a immutable way
        },
        decrement(state, action) {
            state.counter = state.counter - action.payload;
        },
        hide(state) {
            state.isHidden = !state.isHidden;
        },
    },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

//Create reduce store
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    },
});

export default store;

import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
import { Dispatch } from "react";
import { uiActions } from "./ui-slice";

export type Item = {
    id: string;
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
    description: string;
};

export type State = {
    items: Item[];
    totalQuantity: number;
};

type Action = {
    type: string;
    payload: Item;
};

export const initialState = {
    items: [
        {
            id: "1",
            name: "Rice",
            quantity: 1,
            price: 1.99,
            totalPrice: 1.99,
            description: "very tasty rice",
        },
        {
            id: "2",
            name: "Sushi",
            quantity: 1,
            price: 4.99,
            totalPrice: 4.99,
            description: "delicious food",
        },
    ],
    totalQuantity: 2,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state: State, action: Action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    quantity: newItem.quantity,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    description: newItem.description,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(
            state: State,
            action: { type: string; payload: string }
        ) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItem && existingItem?.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                if (existingItem) {
                    existingItem.quantity--;
                    existingItem.totalPrice =
                        existingItem.totalPrice - existingItem.price;
                }
            }
        },
    },
});

//Action creator thunk
export const sendCartData = (cart: any) => {
    return async (dispatch: any) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending...",
                message: "Sending cart data!",
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                "https://react-http-movies-feb4c-default-rtdb.firebaseio.com/products-advanced-redux.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );

            if (!response.ok) {
                throw new Error("Sending cart data failed.");
            }

            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );
        };

        try {
            await sendRequest();
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed!",
                })
            );
        }
    };
};

export const cartActions = cartSlice.actions;

export default cartSlice;

import { createSlice } from "@reduxjs/toolkit";

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

export const cartActions = cartSlice.actions;

export default cartSlice;

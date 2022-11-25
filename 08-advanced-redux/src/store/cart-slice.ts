import { createSlice } from "@reduxjs/toolkit";

export type Item = {
    id: string;
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
    description: string;
};

export type CartState = {
    items: Item[];
    totalQuantity: number;
    changed: boolean;
};

export type CartAction = {
    type: string;
    payload: Item;
};

export const initialState = {
    items: [] as Array<Item>,
    totalQuantity: 0,
    changed: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        replaceCart(
            state,
            action: {
                payload: { items: Item[]; totalQuantity: number };
                type: string;
            }
        ) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state: CartState, action: CartAction) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;
            state.changed = true;
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
            state: CartState,
            action: { type: string; payload: string }
        ) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            state.changed = true;
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

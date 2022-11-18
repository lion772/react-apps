import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            state.items.concat(newItem);
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

import {createSlice } from "@reduxjs/toolkit"
import Product from "../components/Product";

const cartSlice = createSlice ({
    name:"cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct:(state,action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price *action.payload.quantity;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.products = state.products.filter((item) => item._id !== itemId);
        },
        calculateTotals: (state) => {
            let quantity = 0;
            let total = 0;
            state.products.forEach((item) => {
              quantity += item.quantity;
              total += item.price * item.quantity;
            });
            state.quantity = quantity;
            state.total = total;
          }
          
    }
});

export const { addProduct, removeItem, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
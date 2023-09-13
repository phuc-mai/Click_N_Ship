import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },

        increaseQty: (state, action) => {
            state.products = state.products.map((item) => {
                if (item.id === action.payload.id) {
                    item.quantity++
                }
                return item
            })
        },

        decreaseQty: (state, action) => {
            state.products = state.products.map((item) => {
                if (item.id === action.payload.id && item.quantity > 1) {
                    item.quantity--
                }
                return item
            })
        },

        removeFromCart: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const { addProduct, increaseQty, decreaseQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
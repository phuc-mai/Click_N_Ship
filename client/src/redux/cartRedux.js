import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
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
                } else {
                    products.splice(item)
                }
                return item
            })
        }
    }
})

export const { addProduct, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
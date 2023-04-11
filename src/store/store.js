import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import productReducer from './productSlice'

const store = configureStore({
    reducer:{
        cartitems: cartReducer,
        products: productReducer
    }
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const store = configureStore({
    reducer:{
        cartitems: cartReducer
    }
})

export default store;
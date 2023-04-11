import { createSlice } from "@reduxjs/toolkit";

const Status = Object.freeze ( {
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error'
})

const initialState = {
    data: [],
    status: Status.IDLE
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts(state, action){
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
})

export const {setProducts, setStatus} = productSlice.actions;

export default productSlice.reducer;

const fetchProducts = ()=>{
    return async function fetchProductThunk(dispatch, getState){
        dispatch(setStatus(Status.LOADING))

        try{
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(Status.IDLE))
        } catch(error){
            console.log(error);
            dispatch(setStatus(Status.ERROR))

        }
    } 
}

export {fetchProducts, Status};
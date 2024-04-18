import { createSlice } from '@reduxjs/toolkit';
import productdata from "../productData.js"



const initialState = {

    cart : [],
    items : productdata,
    totalQuantity : 0,
    totolPrice : 0
}

export const cartSlice = createSlice({

    name:"cart",
    initialState,
    reducers : []
})

export default cartSlice.reducer




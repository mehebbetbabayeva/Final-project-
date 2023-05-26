import {createSlice} from "@reduxjs/toolkit" ;
const initialState ={
    productData:[],
    userInfo:null,
}

export const eiserSlice = createSlice({
    name:"eiser",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.productData= action.payload;
        }
    }
})


export const {addToCart}=  eiserSlice.actions;
export default eiserSlice.reducer;
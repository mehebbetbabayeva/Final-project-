import {createSlice} from "@reduxjs/toolkit" ;
const initialState ={
    productData:[],
    favoriteData:[],
    userInfo:null,
}

export const eiserSlice = createSlice({
    name:"eiser",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item = state.productData.find((item)=>item._id===action.payload._id);
            if(item){
                item.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload)
            }
           
        },
        addToFavorite:(state,action)=>{
            const item = state.favoriteData.find((item)=>item._id===action.payload._id);
            if(item){
                item.quantity += action.payload.quantity
            }else{
                state.favoriteData.push(action.payload)
            }
           
        },
        resetCart:(state)=>{
            state.productData=[]
        },
        deleteCart:(state,action)=>{
            state.productData=state.productData.filter(
                (item)=>item._id !==action.payload
            )
        },
        increamentQuantity:(state,action)=>{
            const item = state.productData.find(
                (item)=>item._id ===action.payload._id
            );
            if(item){
                item.quantity++;
            }
        },
        decrementQuantity:(state,action)=>{
            const item = state.productData.find(
                (item)=>item._id ===action.payload._id
            );
            if(item.quantity===1){
                item.quantity=1;
            }else{
                item.quantity--
            }
        },

    }
})


export const {addToCart,addToFavorite,resetCart,deleteCart,increamentQuantity,decrementQuantity}=  eiserSlice.actions;
export default eiserSlice.reducer;
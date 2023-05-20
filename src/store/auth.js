import {createSlice} from "@reduxjs/toolkit" ;
const initialState ={
    user:false
}
const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            localStorage.setItem('user',JSON.stringify(action.payload))
            state.user=action.payload
        }
        
    }
})

export const {login} = auth.actions
export default auth.reducer
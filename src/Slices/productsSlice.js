import { createSlice } from "@reduxjs/toolkit";

const productsSlice=createSlice({
    
    name:'products',
    
    initialState:{
        products:[],
        loading:false
    },reducers:{
        productsRequest(state,action){
           return{
            loading:true
           }
        },
        productsSuccess(state,action){
            return{
                loading:false,
                products:action.payload.products
            }
        },
        productsFail(state,action){
            return{
                loading:false,
                error:action.payload
            }
        }
    }
})

//action creators are sending the data to all the reducers
const {actions,reducer}=productsSlice;
export const {productsRequest,productsSuccess,productsFail}=actions;
export default reducer;

// export default productsSlice.reducer;
// export const {}=productsSlice.actions;
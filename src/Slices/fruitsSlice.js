import { createSlice } from "@reduxjs/toolkit";


const initialState={
    fruits:[],
};

export const fruitsSlice=createSlice({
    name:'fruits',
    initialState,
    reducers:{
        setfruits:(state,action)=>{
            state.fruits=[...state.fruits,action.payload]

        },
    },
});

export const {setfruits}=fruitsSlice.actions;
export  default fruitsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState={

    users:[],
};

export const usersSlice=createSlice({
    name:"vini",
    initialState,
    reducers:{
        setUsers:(state,action)=>{
 
            state.users=[...state.users,action.payload]
            //state.users=state.users.push(action.payload)
        },
        deleteUser:(state,action)=>{
            state.users=state.users.filter((user,index)=>index!==action.payload)
        },
    },
});

export const { setUsers , deleteUser} =usersSlice.actions;
export default usersSlice.reducer;
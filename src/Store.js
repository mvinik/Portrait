import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Slices/productsSlice';
//import { thunk } from 'redux-thunk';
//import productsSlice from './Slices/productsSlice'
import userReducer from './Slices/usersSlice';
import fruitReducer from './Slices/fruitsSlice';
import cartReducer from './Slices/cartSlic';
// const reducer = combineReducers({
   
//     productsState: productReducer

// });

const store = configureStore({
   
    reducer:{
        usersInfo: userReducer, //It is the specific name of the usersSlice reducers  
        fruitsInfo:fruitReducer,
        productsState: productReducer,
        cart:cartReducer,
    },
    
   

});

export default store;

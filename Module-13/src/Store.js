import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./UseReducer";


export const store = configureStore({
    reducer :{
          count : userReducer
    } 
})
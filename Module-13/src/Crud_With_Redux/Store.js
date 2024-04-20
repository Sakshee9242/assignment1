import { configureStore } from "@reduxjs/toolkit";
import UseReducer from './UseReducer'

export const Store = configureStore({
    reducer : {
        user : UseReducer
    }
})
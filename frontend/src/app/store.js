import authSlice from "../features/authSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer:
    {
        auth: authSlice
    }
})
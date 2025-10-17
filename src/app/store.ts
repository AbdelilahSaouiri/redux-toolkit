import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import postReducer from "../features/post/PostSlice";

export const store=configureStore({
    reducer:{
        user:userReducer,
        post:postReducer
    },
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
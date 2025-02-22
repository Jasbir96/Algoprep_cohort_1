import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userReducer
        }
    })
}
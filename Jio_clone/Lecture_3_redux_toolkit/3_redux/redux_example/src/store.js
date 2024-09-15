import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice.js";
const store = configureStore({
    reducer: {
        counterSection: counterSlice.reducer,
    }
})

export default store;


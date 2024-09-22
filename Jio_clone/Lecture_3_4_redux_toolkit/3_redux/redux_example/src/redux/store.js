import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/CounterSlice.js";
import counterInputSlice from "./slice/CounterInputSlice.js";
import userSlice from "./slice/UserSlice.js";
const store = configureStore({
    reducer: {
        counterSection: counterSlice.reducer,
        counterInputSlice: counterInputSlice.reducer,
        userSlice: userSlice.reducer,
    },

})

export default store;


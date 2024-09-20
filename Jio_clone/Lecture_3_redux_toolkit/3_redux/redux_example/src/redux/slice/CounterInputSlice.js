import { createSlice } from "@reduxjs/toolkit";
const counterInputSlice = createSlice({
    name: "counterInputSlice",
    initialState: {
        count: 0,
        delta: 1
    },
    // define all the possible bussiness logic
    reducers: {
        increment: (state) => {
            state.count += state.delta;

        },
        decrement: (state) => {
            state.count -= state.delta;

        },
        updateDelta: (state, params) => {
            // to acccess just params.payload
            const delta = params.payload;
            state.delta = delta;

        }
    }
})
export default counterInputSlice;
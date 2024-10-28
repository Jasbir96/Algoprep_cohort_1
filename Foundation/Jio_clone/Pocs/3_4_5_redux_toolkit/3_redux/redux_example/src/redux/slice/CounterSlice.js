import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counterSlice",
    initialState: {
        count: 10,
    },
    // define all the possible bussiness logic
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
})
const counterActions = counterSlice.actions;
export { counterActions };
export default counterSlice;
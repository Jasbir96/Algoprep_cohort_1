import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        user: null,
        loading: true,
        error: null,
    },
    reducers: {
        onPending: (state) => {
            state.user = null;
            state.loading = true;
            state.error = null
        },
        onRejected: (state, params) => {
            state.user = null;
            state.loading = false;
            state.error = params.payload
        }
        ,
        onFulfilled: (state, params) => {
            state.user = params.payload;
            state.loading = false;
            state.error = null
        }
    }
})
const userActions=userSlice.actions;
export {userActions};
export default userSlice;
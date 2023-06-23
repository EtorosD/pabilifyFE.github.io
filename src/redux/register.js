import {createSlice } from "@reduxjs/toolkit"

const registerSlice = createSlice ({
    name:"user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
       registerStart:(state) => {
        state.isFetching=true
       },
       registerSucess:(state,action) => {
        state.isFetching =false;
        state.currentUser = action.payload
       },
       registerFailure:(state) => {
        state.isFetching = false;
        state.error = true;
       },
    
    }
});

export const { registerStart, registerSucess, registerFailure } = registerSlice.actions;
export default registerSlice.reducer;
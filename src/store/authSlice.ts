// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    userInfo:{
        _id?:string,
        name?:string,
        email?:string
    }
    // other auth-related state...
}

const initialState: AuthState = {
    isAuthenticated: false,
    userInfo:{}
    // other auth-related state...
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthenticated: (state, action: PayloadAction<AuthState>) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.userInfo=action.payload.userInfo;
        },
        // other auth-related reducers...
    },
});

export const { setAuthenticated } = authSlice.actions;
export default authSlice.reducer;

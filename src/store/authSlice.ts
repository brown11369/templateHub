// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    // other auth-related state...
}

const initialState: AuthState = {
    isAuthenticated: false,
    // other auth-related state...
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
        // other auth-related reducers...
    },
});

export const { setAuthenticated } = authSlice.actions;
export default authSlice.reducer;

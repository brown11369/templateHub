// toastSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToastState {
    isVisible: boolean;
    message: string;
    // other auth-related state...
}

const initialState: ToastState = {
    isVisible: false,
    message: "",
    // other auth-related state...
};

const toastSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToast: (state, action: PayloadAction<ToastState>) => {
            state.isVisible = action.payload.isVisible;
            state.message = action.payload.message;
        },
        resetToast: (state) => {
            state.isVisible = false;
            state.message = "";
        },
        // other auth-related reducers...
    },
});

export const { setToast, resetToast } = toastSlice.actions;
export default toastSlice.reducer;

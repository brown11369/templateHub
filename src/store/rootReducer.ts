// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import toastSlice from "./toastSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    toast: toastSlice,
    // other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

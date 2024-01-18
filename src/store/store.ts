// store.ts
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
<<<<<<< HEAD



const store = configureStore({
    reducer: rootReducer,
   
});

=======
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"], // List of reducers to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    // other configurations...
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
>>>>>>> f682256 (hello)
export default store;

export type AppDispatch = typeof store.dispatch;

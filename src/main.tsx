<<<<<<< HEAD
// import React from "react";
=======
import React from "react";
>>>>>>> f682256 (hello)
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
<<<<<<< HEAD
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </React.StrictMode>
=======
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
>>>>>>> f682256 (hello)
);

import React from "react";
import { useSelector } from "react-redux";
import "./ToastMsg.css";
import { RootState } from "../../store/rootReducer";

const ToastMsg: React.FC = () => {
    const isVisible = useSelector((state: RootState) => state.toast.isVisible);
    const message = useSelector((state: RootState) => state.toast.message);

    return (
        <div className={`toast ${isVisible ? "active" : ""}`}>
            <p>{message || "Have a good day...!!"}</p>
        </div>
    );
};

export default ToastMsg;

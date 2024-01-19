import "./Layout.css";
import { Outlet } from "react-router-dom";
import ToastMsg from "../ToastMsg/ToastMsg";

const Layout = () => {
    return (
        <div className="layout">
            <Outlet />
            <ToastMsg />
        </div>
    );
};

export default Layout;

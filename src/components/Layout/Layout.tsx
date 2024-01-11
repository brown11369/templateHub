import "./Layout.css";
import { Outlet } from "react-router-dom";
import ToastMsg from "../ToastMsg/ToastMsg";

const Layout = () => {
    return (
        <>
            <Outlet />
            <ToastMsg />
        </>
    );
};

export default Layout;

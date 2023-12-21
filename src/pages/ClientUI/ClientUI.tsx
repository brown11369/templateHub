import "./ClientUI.css";

import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const ClientUI = () => {
    return (
        <>
            <div className="client-body">
                <Header />
                <Outlet />
            </div>
        </>
    );
};

export default ClientUI;

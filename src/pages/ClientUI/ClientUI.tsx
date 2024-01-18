import "./ClientUI.css";

import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import Header from "../../components/client/Header/Header";
=======
import Header from "../../components/Header/Header";
>>>>>>> f682256 (hello)

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

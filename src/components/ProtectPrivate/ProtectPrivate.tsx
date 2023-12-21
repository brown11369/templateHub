import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

const ProtectPrivate: React.FC<{ children: ReactNode }> = ({ children }) => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );
    return isAuthenticated ? children : <Navigate to="/dashboard/login" />;
};

export default ProtectPrivate;

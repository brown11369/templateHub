import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store/rootReducer";
import { ReactNode } from "react";

const ProtectPrivate: React.FC<{ children: ReactNode }> = ({ children }) => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );
    return isAuthenticated ? children : <Navigate to="/dashboard/login" />;
};

export default ProtectPrivate;

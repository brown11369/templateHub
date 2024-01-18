import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import usePersist from "../../hooks/usePersist";

const ProtectPrivate: React.FC<{ children: ReactNode }> = ({ children }) => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );
    const [persist] = usePersist()

    if (!persist && !isAuthenticated) return <Navigate to="/dashboard/login" />

    if (!persist && isAuthenticated) return children

    if (persist || isAuthenticated) return children

};

export default ProtectPrivate;

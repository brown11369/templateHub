import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
<<<<<<< HEAD
import usePersist from "../../hooks/usePersist";
=======
>>>>>>> f682256 (hello)

const ProtectPrivate: React.FC<{ children: ReactNode }> = ({ children }) => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );
<<<<<<< HEAD
    const [persist] = usePersist()

    if (!persist && !isAuthenticated) return <Navigate to="/dashboard/login" />

    if (!persist && isAuthenticated) return children

    if (persist || isAuthenticated) return children

=======
    return isAuthenticated ? children : <Navigate to="/dashboard/login" />;
>>>>>>> f682256 (hello)
};

export default ProtectPrivate;

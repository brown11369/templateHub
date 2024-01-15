import { useDispatch } from "react-redux";
import { setAuthenticated } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import useToast from "./useToast";
import { apiUrl } from "../utils/constant";

const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { handleToast } = useToast();

    const handleLogout = async () => {
        try {
            const res = await fetch(apiUrl + "logout", {
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                navigate("/");
                setTimeout(() => {
                    dispatch(setAuthenticated({isAuthenticated:false,userInfo:{}}));
                    localStorage.clear();
                }, 2000);
                handleToast(true, data.message);
            } else {
                // Handle login failure (e.g., show an error message)
                console.error("Logout failed:", res.statusText);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };
    return { handleLogout };
};

export default useLogout;

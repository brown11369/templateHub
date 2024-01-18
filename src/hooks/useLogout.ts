import { useDispatch } from "react-redux";
import { setAuthenticated } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import useToast from "./useToast";
import { LOGOUT_URL } from "../utils/constant";


const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { handleToast } = useToast();

    const handleLogout = async () => {
        try {
            const res = await fetch(LOGOUT_URL,{credentials:"include"});

            if (res.ok) {
                const data = await res.json();
                navigate("/");
                await new Promise(resolve => setTimeout(resolve, 2000));
                dispatch(setAuthenticated({ isAuthenticated: false, userInfo: {} }));
                localStorage.clear();
                handleToast(true, data.message);
               
            } else {
                const errorMessage = await res.text();
                console.error("Logout failed:", errorMessage);
                handleToast(false, "Plz try again");
                
            }
        } catch (error) {
            console.error("Error during logout:", error);
            handleToast(false, "Error during logout: Plz try again");
        }
    };

    return { handleLogout };
};

export default useLogout;

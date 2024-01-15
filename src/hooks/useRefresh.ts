import { setAuthenticated } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { apiUrl } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import useToast from "./useToast";

const useRefresh = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate()
    const { handleToast } = useToast();


    const handleRefresh = async (  ) => {
        try {
            const res = await fetch(apiUrl + "refresh-token", {
                method: "POST",
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                const {userInfo}=data
                console.log(data);
                dispatch(setAuthenticated({isAuthenticated:true,userInfo}));
            } else if (res.status === 401 &&res.statusText === "Unauthorized") {
                console.log("pls login again");
                localStorage.clear()
                dispatch(setAuthenticated({isAuthenticated:false,userInfo:{}}))
                navigate('/dashboard/login')
                handleToast(true,"Timeout plz login again")
            } else {
                // Handle login failure (e.g., show an error message)
                console.error("Login failed:", res.statusText);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };
    return { handleRefresh };
};

export default useRefresh;

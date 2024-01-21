import { setAuthenticated } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { REFRESH_TOKEN_URL } from "../utils/constant";
import useToast from "./useToast";

const useRefresh = () => {
    const dispatch = useDispatch();
    const { handleToast } = useToast();


    const handleRefresh = async (  ) => {
        try {
            const res = await fetch(REFRESH_TOKEN_URL, {
                method: "POST",
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                const {userInfo}=data               
                dispatch(setAuthenticated({isAuthenticated:true,userInfo}));
                return true
            } else if (res.status === 401 &&res.statusText === "Unauthorized") {
                localStorage.clear()
                dispatch(setAuthenticated({isAuthenticated:false,userInfo:{}}))
                handleToast(true,"Timeout plz login again")
            } else {
                console.error("Login failed:", res.statusText);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };
    return { handleRefresh };
};

export default useRefresh;

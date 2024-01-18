<<<<<<< HEAD
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
=======
import { useNavigate } from "react-router-dom";
import { setAuthenticated } from "../store/authSlice";
import { useDispatch } from "react-redux";

const useRefresh = (apiUrl: string) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRefresh = async (
        retryFunc: (apiUrl: string) => Promise<void>
    ) => {
        try {
            const res = await fetch(apiUrl + "refresh-token", {
>>>>>>> f682256 (hello)
                method: "POST",
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
<<<<<<< HEAD
                const {userInfo}=data               
                dispatch(setAuthenticated({isAuthenticated:true,userInfo}));
                return true
            } else if (res.status === 401 &&res.statusText === "Unauthorized") {
                localStorage.clear()
                dispatch(setAuthenticated({isAuthenticated:false,userInfo:{}}))
                handleToast(true,"Timeout plz login again")
            } else {
=======
                console.log(data);

                retryFunc(apiUrl);
            } else if (
                res.status === 401 &&
                res.statusText === "Unauthorized"
            ) {
                console.log("pls login again");
                dispatch(setAuthenticated({isAuthenticated:false,userInfo:{}}));
                setTimeout(() => {
                    localStorage.clear();
                }, 2000);
                navigate("/");
            } else {
                // Handle login failure (e.g., show an error message)
>>>>>>> f682256 (hello)
                console.error("Login failed:", res.statusText);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };
    return { handleRefresh };
};

export default useRefresh;

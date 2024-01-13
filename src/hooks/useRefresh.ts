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
                method: "POST",
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
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
                navigate("/dashboard/login");
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

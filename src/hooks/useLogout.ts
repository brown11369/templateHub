import { useDispatch } from "react-redux";
import { setAuthenticated } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import useToast from "./useToast";
<<<<<<< HEAD
import { LOGOUT_URL } from "../utils/constant";


const useLogout = () => {
=======

const useLogout = (apiUrl: string) => {
>>>>>>> f682256 (hello)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { handleToast } = useToast();

    const handleLogout = async () => {
        try {
<<<<<<< HEAD
            const res = await fetch(LOGOUT_URL,{credentials:"include"});
=======
            const res = await fetch(apiUrl + "logout", {
                credentials: "include",
            });
>>>>>>> f682256 (hello)

            if (res.ok) {
                const data = await res.json();
                navigate("/");
<<<<<<< HEAD
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

=======
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
>>>>>>> f682256 (hello)
    return { handleLogout };
};

export default useLogout;

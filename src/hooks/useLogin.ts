import useToast from "./useToast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../store/authSlice";
import { LOGIN_URL } from "../utils/constant";
import useCookiesRemover from "./useCookiesRemover";
import usePersist from "./usePersist";
import { RootState } from "../store/rootReducer";

const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isTrusted, setIsTrusted] = useState(false);
    const dispatch = useDispatch();
    const { handleToast } = useToast();

    const {handleCookieRemover} = useCookiesRemover()

    const [persist] =usePersist()
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

    useEffect(()=>{
        if(!persist && !isAuthenticated) handleCookieRemover()
    },[])
    
    const handleLogin = async () => {
        try {
            const res = await fetch(LOGIN_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials:"include"
            });

            if (res.ok) {
                const data = await res.json();
                const {userInfo}=data
                isTrusted?localStorage.setItem("persist","true"):localStorage.setItem("persist","false")
                dispatch(setAuthenticated({isAuthenticated:true,userInfo}))
                handleToast(true, data.message);
                
            } else {
                handleToast(true, "Login failed");
                console.error("Login failed:", res.statusText);
            }
        } catch (error) {
            handleToast(true, "Error during login");
            console.error("Error during login:", error);
        }
    };

    return { email, password, setEmail, setPassword, handleLogin , setIsTrusted};
};

export default useLogin;

<<<<<<< HEAD
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
=======
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthenticated } from "../store/authSlice";
import useToast from "./useToast";

const useLogin = (apiUrl: string) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { handleToast } = useToast();

    const handleLogin = async () => {
        try {
            const res = await fetch(apiUrl + "login", {
>>>>>>> f682256 (hello)
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
<<<<<<< HEAD
                credentials:"include"
=======
                credentials: "include",
>>>>>>> f682256 (hello)
            });

            if (res.ok) {
                const data = await res.json();
<<<<<<< HEAD
                const {userInfo}=data
                isTrusted?localStorage.setItem("persist","true"):localStorage.setItem("persist","false")
                dispatch(setAuthenticated({isAuthenticated:true,userInfo}))
                handleToast(true, data.message);
                
=======
                console.log(data);
                const {userInfo}=data
                dispatch(setAuthenticated({isAuthenticated:true,userInfo}));
                handleToast(true, data.message);
                navigate("/dashboard");
>>>>>>> f682256 (hello)
            } else {
                handleToast(true, "Login failed");
                console.error("Login failed:", res.statusText);
            }
        } catch (error) {
            handleToast(true, "Error during login");
            console.error("Error during login:", error);
        }
    };

<<<<<<< HEAD
    return { email, password, setEmail, setPassword, handleLogin , setIsTrusted};
=======
    return { email, password, setEmail, setPassword, handleLogin };
>>>>>>> f682256 (hello)
};

export default useLogin;

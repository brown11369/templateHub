import { useEffect, useState } from "react";
<<<<<<< HEAD
import { USER_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../store/authSlice";
import { RootState } from "../store/rootReducer";
import useRefresh from "./useRefresh";
import usePersist from "./usePersist";
import useToast from "./useToast";

interface UserInfo {
    _id?: string;
    name?: string;
    email?:string;
=======
import useRefresh from "./useRefresh";
import { apiUrl } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../store/authSlice";

interface UserInfo {
    name: string;
    // Add other properties as needed
>>>>>>> f682256 (hello)
}

const useUserInfo = () => {

<<<<<<< HEAD
    const auth = useSelector(
            (state: RootState) => state.auth
        );

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { handleRefresh } = useRefresh()
    const [persist] = usePersist()

    const {handleToast}= useToast();



    const handleGetUserInfo = async () => {
        if(!auth.isAuthenticated){

            try {
                const res = await fetch(USER_URL, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });
    
    
                if (res.ok) {
                    const data = await res.json();
                    const userInfo = data.userInfo;
                    setUserInfo(userInfo);
                    if(persist){
                        dispatch(setAuthenticated({isAuthenticated:true,userInfo}))
                    }else{
                        dispatch(setAuthenticated({isAuthenticated:false,userInfo}))
                    }
                } 
                else if(res.status === 401) {
                    const data = await res.json()
                    if(data.message==="Refresh token is missing"){
                        localStorage.clear()
                        navigate("/dashboard/login")
                        handleToast(true,"Please login again")
                    }
                    if(data.message==="Access token is missing"){
                        let success = await handleRefresh()
                        if(success){
                          handleGetUserInfo()
                        }
                    }
                }


            } catch (error) {
                console.error("Error during getUserInfo:", error);
                localStorage.clear()
                dispatch(setAuthenticated({isAuthenticated:false,userInfo:{}}))
                navigate('/dashboard/login')
            }
        }else{

            setUserInfo(auth?.userInfo)
=======
    const navigate = useNavigate()
    const { handleRefresh } = useRefresh(apiUrl);
    const dispatch = useDispatch()

    const handleGetUserInfo = async (apiUrl: string) => {
        try {
            const res = await fetch(apiUrl + "user", {
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            console.log(res);

            if (res.ok) {
                const data = await res.json();
                setUserInfo(data.userInfo);
            } else {
                // Handle login failure (e.g., show an error message)
                if (res.status === 401) {
                    handleRefresh(handleGetUserInfo);
                }
            }
        } catch (error) {
            console.error("Error during getUserInfo:", error);
            localStorage.clear()
            dispatch(setAuthenticated({isAuthenticated:false,userInfo:{}}))
           navigate('/dashboard/login')
>>>>>>> f682256 (hello)
        }
    };

    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
<<<<<<< HEAD
        handleGetUserInfo().finally(() => setLoading(false));
=======
        handleGetUserInfo(apiUrl).finally(() => setLoading(false));
>>>>>>> f682256 (hello)
    }, []);

    return { userInfo, loading };
};

export default useUserInfo;

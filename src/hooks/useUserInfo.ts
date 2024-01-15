import { useEffect, useState } from "react";
import { apiUrl } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../store/authSlice";
import useRefresh from "./useRefresh";
import usePersist from "./usePersist";

interface UserInfo {
    name: string;
    // Add other properties as needed
}

const useUserInfo = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { handleRefresh } = useRefresh()
    const [persist] = usePersist()



    const handleGetUserInfo = async () => {
        try {
            const res = await fetch(apiUrl + "user", {
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });


            if (res.ok) {
                const data = await res.json();
                setUserInfo(data.userInfo);
            } else if(res.status === 401) {
                const data = await res.json()
                if(data.message==="Refresh token is missing"){
                    console.log("invalid credentials",data)
                    if(!persist) return handleRefresh()
                    handleRefresh()
                }
                if(data.message==="Access token is missing"){
                    handleRefresh()
                    handleGetUserInfo()
                }
            }
        } catch (error) {
            console.error("Error during getUserInfo:", error);
            localStorage.clear()
            dispatch(setAuthenticated({isAuthenticated:false,userInfo:{}}))
           navigate('/dashboard/login')
        }
    };

    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        handleGetUserInfo().finally(() => setLoading(false));
    }, []);

    return { userInfo, loading };
};

export default useUserInfo;

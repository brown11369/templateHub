import { useEffect, useState } from "react";
import useRefresh from "./useRefresh";
import { apiUrl } from "../lib/constant";

interface UserInfo {
    name: string;
    // Add other properties as needed
}

const useUserInfo = () => {
    const { handleRefresh } = useRefresh(apiUrl);

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
        }
    };

    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        handleGetUserInfo(apiUrl).finally(() => setLoading(false));
    }, []);

    return { userInfo, loading };
};

export default useUserInfo;

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

            if (res.ok) {
                const data = await res.json();
                console.log(data);
                setUserInfo(data.userInfo);
            } else {
                // Handle login failure (e.g., show an error message)
                console.error("Error token expired", res.statusText);
                if (res.status === 401 && res.statusText === "Unauthorized") {
                    handleRefresh(() => handleGetUserInfo(apiUrl));
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
    }, [apiUrl]);

    return { userInfo, loading };
};

export default useUserInfo;

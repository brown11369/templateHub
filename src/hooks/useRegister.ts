import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "./useToast";
import { apiUrl } from "../utils/constant";

const useRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { handleToast } = useToast();

    const handleRegister = async () => {
        try {
            const res = await fetch(apiUrl + "register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                console.log(data);
                handleToast(true, data.message);
                navigate("/dashboard/login");
            } else {
                handleToast(true, "User Exists...!");
                console.error("User Exists...!:", res.statusText);
            }
        } catch (error) {
            handleToast(true, "Error during login");
            console.error("Error during login:", error);
        }
    };

    return {
        name,
        email,
        password,
        setName,
        setEmail,
        setPassword,
        handleRegister,
    };
};

export default useRegister;

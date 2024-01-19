import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "./useToast";
import { REGISTER_URL } from "../utils/constant";

const useRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { handleToast } = useToast();

    const handleRegister = async () => {
        try {
            const res = await fetch(REGISTER_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                handleToast(true, data.message);
                navigate("/dashboard/login");
            } else {
                console.error("User Exists...!:", res.statusText);
                handleToast(true, "User Exists...!:");
            }
        } catch (error) {
            console.error("Error during login:", error);
            handleToast(true, "Error during login");
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

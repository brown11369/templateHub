import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "./useToast";
<<<<<<< HEAD
import { REGISTER_URL } from "../utils/constant";
=======
import { apiUrl } from "../utils/constant";
>>>>>>> f682256 (hello)

const useRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { handleToast } = useToast();

    const handleRegister = async () => {
        try {
<<<<<<< HEAD
            const res = await fetch(REGISTER_URL, {
=======
            const res = await fetch(apiUrl + "register", {
>>>>>>> f682256 (hello)
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
<<<<<<< HEAD
                handleToast(true, data.message);
                navigate("/dashboard/login");
            } else {
                console.error("User Exists...!:", res.statusText);
                handleToast(true, "User Exists...!:");
            }
        } catch (error) {
            console.error("Error during login:", error);
            handleToast(true, "Error during login");
=======
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
>>>>>>> f682256 (hello)
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

// hooks/useTemplateForm.tsx
import { useState, ChangeEvent } from "react";
import { Template } from "../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import useToast from "./useToast";
<<<<<<< HEAD
import { setAuthenticated } from "../store/authSlice";
import useRefresh from "./useRefresh";
import { CREATE_TEMPLATE_URL } from "../utils/constant";
=======
import { useNavigate } from "react-router-dom";
import { setAuthenticated } from "../store/authSlice";
import useRefresh from "./useRefresh";
import { apiUrl } from "../utils/constant";
>>>>>>> f682256 (hello)

const useTemplateForm = () => {

    const { handleToast } = useToast()

<<<<<<< HEAD

    const dispatch = useDispatch()
    const { handleRefresh } = useRefresh();
=======
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { handleRefresh } = useRefresh(apiUrl);
>>>>>>> f682256 (hello)


    const userInfo = useSelector(
        (state: RootState) => state.auth.userInfo
    );


    const [template, setTemplate] = useState<Template>({
        user_id: userInfo._id as string,
        template_name: "",
        main_image: "",
        stacks: [],
        template_url: "",
        description: "",
        images: [],
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if (e.target.type === "checkbox") {
            const isChecked = (e.target as HTMLInputElement).checked;
            const stackValue = e.target.value;

            setTemplate((prev) => {
                if (isChecked) {
                    return {
                        ...prev,
                        stacks: [...prev.stacks, stackValue],
                    };
                } else {
                    return {
                        ...prev,
                        stacks: prev.stacks.filter((stack) => stack !== stackValue),
                    };
                }
            });
        } else {
            setTemplate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }
    };

    const addImage = (imageUrl: string) => {
        if (imageUrl.trim() !== "") {
            setTemplate((prev) => ({
                ...prev,
                images: [...prev.images, imageUrl],
            }));
        }
    };

<<<<<<< HEAD
    const createTemplate = async (): Promise<boolean> => {
        console.log(template)
        try {
            const res = await fetch(CREATE_TEMPLATE_URL, {
=======
    const createTemplate = async (apiUrl: string) => {
        console.log(template)
        try {
            const res = await fetch(apiUrl + "template/create", {
>>>>>>> f682256 (hello)
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
<<<<<<< HEAD
                body: JSON.stringify(template),
                credentials: "include",
=======
                credentials: "include",
                body: JSON.stringify(template),
>>>>>>> f682256 (hello)
            });

            if (res.ok) {
                const data = await res.json();
<<<<<<< HEAD
                handleToast(true, data.message);
                return true
            } else {
                if (res.status === 401) {
                    let success = await handleRefresh();
                    if (success) {
                        return createTemplate()
                    } else {
                        console.error("refresh-token failed")
                        return false
                    }
                }
            }
            return true
=======
                console.log(res);
                handleToast(true, data.message)
            } else {
                // Handle login failure (e.g., show an error message)
                if (res.status === 401) {
                    handleRefresh(createTemplate);

                }
            }


>>>>>>> f682256 (hello)

        } catch (error) {
            console.error("Error creating template:", error);
            localStorage.clear()
            dispatch(setAuthenticated({ isAuthenticated: false, userInfo: {} }))
<<<<<<< HEAD
            return false
=======
            navigate('/dashboard/login')
            throw error; // Rethrow the error for components to handle
>>>>>>> f682256 (hello)
        }
    };


    const handleSubmit = async () => {
        try {
<<<<<<< HEAD
            let success = await createTemplate();
            if (success) {
                return true
            }
        } catch (error) {
            console.error(error)
            return false
=======
            await createTemplate(apiUrl);
            // Handle success or redirect if needed
        } catch (error) {
            // Handle error
>>>>>>> f682256 (hello)
        }
    };


    return { template, handleInputChange, addImage, handleSubmit, createTemplate };
};

export default useTemplateForm;

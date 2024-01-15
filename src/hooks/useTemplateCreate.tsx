// hooks/useTemplateForm.tsx
import { useState, ChangeEvent } from "react";
import { Template } from "../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import useToast from "./useToast";
import { useNavigate } from "react-router-dom";
import { setAuthenticated } from "../store/authSlice";
import useRefresh from "./useRefresh";
import { apiUrl } from "../utils/constant";

const useTemplateForm = () => {

    const { handleToast } = useToast()

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { handleRefresh } = useRefresh();


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

    const createTemplate = async () => {
        console.log(template)
        try {
            const res = await fetch(apiUrl + "template/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(template),
            });

            if (res.ok) {
                const data = await res.json();
                console.log(res);
                handleToast(true, data.message)
            } else {
                // Handle login failure (e.g., show an error message)
                if (res.status === 401) {
                    handleRefresh();
                    createTemplate()
                }
            }



        } catch (error) {
            console.error("Error creating template:", error);
            localStorage.clear()
            dispatch(setAuthenticated({ isAuthenticated: false, userInfo: {} }))
            navigate('/dashboard/login')
            throw error; // Rethrow the error for components to handle
        }
    };


    const handleSubmit = async () => {
        try {
            await createTemplate();
            // Handle success or redirect if needed
        } catch (error) {
            // Handle error
        }
    };


    return { template, handleInputChange, addImage, handleSubmit, createTemplate };
};

export default useTemplateForm;

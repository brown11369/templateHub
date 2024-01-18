// hooks/useTemplateForm.tsx
import { useState, ChangeEvent } from "react";
import { Template } from "../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import useToast from "./useToast";
import { setAuthenticated } from "../store/authSlice";
import useRefresh from "./useRefresh";
import { CREATE_TEMPLATE_URL } from "../utils/constant";

const useTemplateForm = () => {

    const { handleToast } = useToast()


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

    const createTemplate = async (): Promise<boolean> => {
        console.log(template)
        try {
            const res = await fetch(CREATE_TEMPLATE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(template),
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
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

        } catch (error) {
            console.error("Error creating template:", error);
            localStorage.clear()
            dispatch(setAuthenticated({ isAuthenticated: false, userInfo: {} }))
            return false
        }
    };


    const handleSubmit = async () => {
        try {
            let success = await createTemplate();
            if (success) {
                return true
            }
        } catch (error) {
            console.error(error)
            return false
        }
    };


    return { template, handleInputChange, addImage, handleSubmit, createTemplate };
};

export default useTemplateForm;

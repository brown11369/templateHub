// hooks/useTemplateForm.tsx
import { useState, ChangeEvent } from "react";
import { Template } from "../utils/types";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

const useTemplateForm = () => {

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

    const createTemplate = async (template: Template) => {
        console.log(template)
        try {
            const data = await fetch("http://localhost:5000/template/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(template),
            });

            const res = await data.json();
            console.log(res);
            return res; // You might want to return the response for further handling in components
        } catch (error) {
            console.error("Error creating template:", error);
            throw error; // Rethrow the error for components to handle
        }
    };


    const handleSubmit = async () => {
        try {
            await createTemplate(template);
            // Handle success or redirect if needed
        } catch (error) {
            // Handle error
        }
    };


    return { template, handleInputChange, addImage, handleSubmit, createTemplate };
};

export default useTemplateForm;

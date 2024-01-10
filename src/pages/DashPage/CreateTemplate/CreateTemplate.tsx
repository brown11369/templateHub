// pages/CreateTemplate.tsx
import React from "react";
import useTemplateForm from "../../../hooks/useTemplateCreate";

const CreateTemplate: React.FC = () => {
    const { template, handleInputChange, addImage, handleSubmit } = useTemplateForm();

    return (
        <main>
            <section>
                <input
                    type="text"
                    placeholder="Enter Template Name"
                    onChange={handleInputChange}
                    name="template_name"
                />
                <input
                    type="text"
                    placeholder="Enter Image URL"
                    onChange={handleInputChange}
                    name="main_image"
                />
                <div>
                    <input
                        type="checkbox"
                        name="html"
                        id="htmlCheckbox"
                        value="HTML"
                        onChange={handleInputChange}
                    />
                    <span>HTML</span>
                    <input
                        type="checkbox"
                        name="css"
                        id="cssCheckbox"
                        value="CSS"
                        onChange={handleInputChange}
                    />
                    <span>CSS</span>
                    <input
                        type="checkbox"
                        name="js"
                        id="jsCheckbox"
                        value="JS"
                        onChange={handleInputChange}
                    />
                    <span>JS</span>
                </div>
                <input
                    type="text"
                    placeholder="Enter Template Live Link"
                    onChange={handleInputChange}
                    name="template_url"
                />
                <textarea
                    id="description"
                    cols={30}
                    rows={10}
                    placeholder="Enter Description"
                    onChange={handleInputChange}
                    name="description"
                />

                <div>
                    <h4>Added Extra Images:</h4>
                    <ul>
                        {template.images.map((image, index) => (
                            <li key={index}>{image}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <input type="text" placeholder="Enter Extra Image URL" id="extraImageUrl" />
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        const inputElement = document.getElementById("extraImageUrl") as HTMLInputElement | null;
                        const imageUrl = inputElement?.value || '';
                        addImage(imageUrl);
                    }}>Add</button>
                </div>

                <button
                    className="logout-btn"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    Create Template
                </button>
            </section>
        </main>
    );
};

export default CreateTemplate;

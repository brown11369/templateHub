import "./CreateTemplate.css"

import React from "react";
import useTemplateForm from "../../../hooks/useTemplateCreate";

const CreateTemplate: React.FC = () => {
    const { template, handleInputChange, addImage, handleSubmit } = useTemplateForm();

    return (
        <section className="createTemplate">
            <form>
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
                <div className="stacks-checkbox">
                    <div>

                        <input
                            type="checkbox"
                            name="html"
                            id="htmlCheckbox"
                            value="HTML"
                            onChange={handleInputChange}
                        />
                        &nbsp;
                        <span>HTML</span>
                    </div>
                    <div>

                        <input
                            type="checkbox"
                            name="css"
                            id="cssCheckbox"
                            value="CSS"
                            onChange={handleInputChange}
                        />
                        &nbsp;
                        <span>CSS</span>
                    </div>
                    <div>

                        <input
                            type="checkbox"
                            name="js"
                            id="jsCheckbox"
                            value="JS"
                            onChange={handleInputChange}
                        />
                        &nbsp;

                        <span>JS</span>
                    </div>
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
                        {template.images.map((image) => (
                            <li key={image}>{image}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div>
                        <input type="text" placeholder="Enter Extra Image URL" id="extraImageUrl" />
                    </div>
                    <br />
                    <button
                        className="btn"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault();
                            const inputElement = document.getElementById("extraImageUrl") as HTMLInputElement | null;
                            const imageUrl = inputElement?.value || '';
                            addImage(imageUrl);
                        }}>Add</button>
                </div>

                <button
                    className="btn"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    Create Template
                </button>
            </form>

        </section>
    );
};

export default CreateTemplate;

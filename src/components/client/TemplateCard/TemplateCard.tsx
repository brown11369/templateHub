import React from "react";
import { Template } from "../../../utils/types";
import { Link } from "react-router-dom";

interface TemplateCardProps {
    template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
    return (
        <Link to={`/template/${template?.template_name}`} state={{ template }}>
            <div>
                <img width={200} src={template?.main_image} alt="" />
            </div>
            <div>
                <div>
                    <h2>{template?.template_name}</h2>
                    <p>{template?.stacks.join(", ")}</p>
                </div>
                <div>
                    <p>{template?.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default TemplateCard;

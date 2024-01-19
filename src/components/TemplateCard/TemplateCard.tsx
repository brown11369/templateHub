import React from "react";
import { Template } from "../../utils/types";
import { Link } from "react-router-dom";
import './TemplateCard.css';

interface TemplateCardProps {
    template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
    return (
        <Link className="main_card"  to={`/template/${template?.template_name}`} state={{ template }}>
            <div className="card_imgbx">
                <img className="card_img"  src={template?.main_image} alt="" />
            </div>
            <div className="card_description">
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

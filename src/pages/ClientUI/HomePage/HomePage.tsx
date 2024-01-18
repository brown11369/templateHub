import React from "react";
import useTemplate from "../../../hooks/useTemplate";
import { Template } from "../../../utils/types";
import TemplateCard from "../../../components/client/TemplateCard/TemplateCard";

import "./HomePage.css"

const HomePage: React.FC = () => {
    const { templates }: { templates: Template[] } = useTemplate();


    return (
        <main>
            <section className="templates">
                {templates?.map((template) => {
                    return <TemplateCard key={template._id} template={template} />
                })}
            </section>
        </main>
    );
};

export default HomePage;

import React from 'react'
import useTemplate from '../../../hooks/useTemplate';
import { Link } from 'react-router-dom';
import { Template } from '../../../utils/types';


const TemplateListsPage: React.FC = () => {


    const { templates }: { templates: Template[] } = useTemplate();

    return (
        <div>
            <ul>
                {templates?.map((template) => {
                    return (
                        <li key={template?._id}>
                            <div>
                                <h3>{template?.template_name}</h3>
                                <div>
                                    <Link to={`/dashboard/templates/manage/${template?.template_name}/view`}>view</Link>
                                    <Link to={`/dashboard/templates/manage/${template?.template_name}/edit`}> edit
                                    </Link>

                                    <button>delete</button>
                                </div>
                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default TemplateListsPage
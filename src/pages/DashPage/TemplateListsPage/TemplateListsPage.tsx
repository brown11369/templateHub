import React from 'react'
import "./TemplateListsPage.css"
import useTemplate from '../../../hooks/useTemplate';
import { Link } from 'react-router-dom';
import { Template } from '../../../utils/types';
import useUserInfo from "../../../hooks/useUserInfo";


const TemplateListsPage: React.FC = () => {

    const { templates }: { templates: Template[] } = useTemplate();
    const { loading, userInfo } = useUserInfo();

    return (
        <div className="table-box">
            <table className="table-container">
                <thead className="table-header">
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <th>
                            <span>Title</span>
                        </th>
                        <th>
                            <span>Author</span>
                        </th>
                        <th>
                            <span>Categories</span>
                        </th>
                        <th>
                            <span>Tags</span>
                        </th>
                        <th>
                            <span>Date</span>
                        </th>
                        <th>
                            <span>Views</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {templates?.map((template) => {

                        const updatedAt = template?.updatedAt?.split("T") as string[]

                        console.log(template)
                        return (
                            <tr key={template?._id}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td className='titile-td'>
                                    <div>
                                        <span className="template-title">{template?.template_name}</span>
                                    </div>
                                    <div className="template-action">
                                        <span className="template-edit">
                                            <Link to={`/dashboard/templates/manage/${template?.template_name}/edit`}>Edit</Link>
                                        </span> | <span className="template-preview">
                                            <Link to={`/dashboard/templates/manage/${template?.template_name}/view`}>Preview</Link>
                                        </span> | <span className="template-trash"><Link to={`/dashboard/templates/manage/${template?.template_name}/edit`}>Trash</Link>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span>{loading ? <span>Loading...</span> : userInfo && <span>{userInfo.name}</span>}</span>
                                </td>
                                <td>
                                    <span>Categories</span>
                                </td>
                                <td>
                                    <span>{template?.stacks?.join(", ")}</span>
                                </td>
                                <td>
                                    <div>
                                        <span>Modify : {updatedAt[0]} at {updatedAt[1].split(".")[0]}</span>
                                    </div>
                                </td>
                                <td>
                                    <button>390</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot className="table-footer">
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <th>
                            <span>Title</span>
                        </th>
                        <th>
                            <span>Author</span>
                        </th>
                        <th>
                            <span>Categories</span>
                        </th>
                        <th>
                            <span>Tags</span>
                        </th>
                        <th>
                            <span>Date</span>
                        </th>
                        <th>
                            <span>Views</span>
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default TemplateListsPage